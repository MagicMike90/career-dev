import { Component, OnInit } from '@angular/core';
import { AppLevelAlertService } from '../../services/app-level-alert.service';

@Component({
  selector: 'app-level-alert',
  templateUrl: './app-level-alert.component.html',
  styleUrls: ['./app-level-alert.component.css']
})
export class AppLevelAlertComponent implements OnInit {
  alertType: string;
  message: string;

  constructor(private messageService: AppLevelAlertService) {
    this.alertType = 'alert-primary';
  }

  ngOnInit() {
    this.messageService.getMessage().subscribe(message => {
      this.message = message;
      console.log(message);
    });
  }
  clearMessage() {
    this.messageService.clear();
  }
}
