import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: string;
  form: FormGroup;
  employeeAddressForm: FormGroup;
  submitted: boolean;

  constructor(private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.title = 'User Login';

    // initialize the form
    this.createForm();

    this.employeeAddressForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      address: new FormGroup({
        postalCode: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required)
      })
    });
    this.submitted = false;
  }

  addNewEmployeeAddress() {
    this.employeeAddressForm.reset();
    this.submitted = false;
  }
  createForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {

    const email = this.form.value.email;
    const password = this.form.value.password;

    this.authService.login(email, password)
      .subscribe(res => {
        // login successful

        // outputs the login info through a JS alert.
        // IMPORTANT: remove this when test is done.
        alert('Login successful! '
          + 'USERNAME: '
          + email
          + ' TOKEN: '
          + this.authService.getAuth().token
        );

        this.router.navigate(['dashboard']);
      },
        err => {
          // login failed
          console.log(err);
          this.form.setErrors({
            'auth': 'Incorrect username or password'
          });
        });
  }

  onBack() {
    this.router.navigate(['login']);
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
    errors['email'] = (this.getFormControl('email').hasError('required') ? 'You must enter a value' :
      this.getFormControl('email').hasError('email') ? 'Not a valid email' : '');

    errors['password'] = (this.getFormControl('password').hasError('required') ? 'You must enter a value' :
      this.getFormControl('password').hasError('minLength') ? 'Not a valid password' : '');

    return errors[name];
  }
}
