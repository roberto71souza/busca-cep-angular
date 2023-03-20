import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cep } from 'src/app/model/cep';

@Component({
  selector: 'app-modal-cep',
  templateUrl: './modal-cep.component.html',
  styleUrls: ['./modal-cep.component.css'],
})
export class ModalCepComponent implements OnInit {
  @Input() cepModelInput = new Cep();

  @Output() closeModal = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closeModal.emit(false);
  }
}
