import { Component, OnInit, ElementRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public modalOpen: boolean;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.getModal().subscribe(isOpen => {
      this.modalOpen = isOpen as boolean;
    });
  }

  closeModal() {
    this.modalService.close();
  }
}
