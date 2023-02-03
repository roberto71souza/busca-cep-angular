import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Cep } from 'src/app/model/cep';

@Component({
  selector: 'app-modal-cep',
  templateUrl: './modal-cep.component.html',
  styleUrls: ['./modal-cep.component.css'],
})
export class ModalCepComponent implements OnInit {
  @Input() cepModelInput = new Cep();

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}

  close() {
    this.modalService.showModal = false;
  }
}
