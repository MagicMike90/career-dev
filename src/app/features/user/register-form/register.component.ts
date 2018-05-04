import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../../../core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title: string;
  form: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private registerService: RegisterService) { }

  ngOnInit() {
    this.title = 'New User Registration';

    // initialize the form
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['',
        [Validators.required,
        Validators.email]
      ],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
      displayName: ['', Validators.required]
    }, {
        validator: this.passwordConfirmValidator
      });
  }

  onSubmit() {
    // build a temporary user object from form values
    const tempUser = <User>{};
    tempUser.username = this.form.value.username;
    tempUser.email = this.form.value.email;
    tempUser.password = this.form.value.password;
    tempUser.displayName = this.form.value.displayName;

    this.registerService.addUser(tempUser).subscribe(user => {
      if (user) {
        console.log(user);
        // console.log('User ' + user.username + ' has been created.');
        // redirect to login page
        this.router.navigate(['user/login']);
      } else {
        // registration failed
        this.form.setErrors({
          'register': 'User registration failed.'
        });
      }
      // console.log('User ' + user.username + ' has been created.');
      // // redirect to login page
      // this.router.navigate(['user/login']);
    }, error => console.log(error));
  }

  onBack() {
    this.router.navigate(['dashboard']);
  }

  // custom validator to compare
  // the password and passwordConfirm values.
  passwordConfirmValidator(control: FormControl): any {

    // retrieve the two Controls
    const p = control.root.get('password');
    const pc = control.root.get('passwordConfirm');

    if (p && pc) {
      if (p.value !== pc.value) {
        pc.setErrors(
          { 'passwordMismatch': true }
        );
      } else {
        pc.setErrors(null);
      }
    }
    return null;
  }

  // retrieve a FormControl
  getFormControl(name: string) {
    return this.form.get(name);
  }

  // returns TRUE if the FormControl is valid
  isValid(name: string) {
    const e = this.getFormControl(name);
    return e && e.valid;
  }

  // returns TRUE if the FormControl has been changed
  isChanged(name: string) {
    const e = this.getFormControl(name);
    return e && (e.dirty || e.touched);
  }

  // returns TRUE if the FormControl is invalid after user changes
  hasError(name: string) {
    const e = this.getFormControl(name);
    return e && (e.dirty || e.touched) && !e.valid;
  }
  getErrorMessage(name) {
    const errors = {};
    errors[name] = this.getFormControl(name).errors;
    console.log(errors[name]);
    return errors[name];
  }
}
