import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  alertType: string;
  message: string;

  constructor(private messageService: MessageService) {
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
