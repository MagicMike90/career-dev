import { Component, OnInit } from '@angular/core';
import { ModalService } from './core/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.open();
  }
}
