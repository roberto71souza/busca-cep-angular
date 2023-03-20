import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import { environment } from 'src/environments/environment';
import { Cep } from 'src/app/model/cep';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  cepModel = new Cep();
  inputPesquisa!: string;

  showModal: boolean = false;

  get listaCeps(): Cep[] {
    return this.cepService.getCepListLocalStorage();
  }

  constructor(private cepService: CepService) {}

  ngOnInit(): void {}

  buscar(): void {
    this.cepService
      .buscaCep(this.inputPesquisa)
      .subscribe({
        next: (response: Cep) => {
          this.cepModel = response;

          if (!this.cepModel.erro) {
            this.cepModel.urlMaps = `${environment.baseUrlMaps}/${this.cepModel.cep}`;
            this.cepService.addCepItem(this.cepModel);
          }
        },
        error: (error: any) => {
          this.cepModel.erro = true;
        },
      })
      .add(() => {
        this.showModal = true;
        this.inputPesquisa = '';
      });
  }

  excluirBusca(cep: string): void {
    this.cepService.removeCepLocalStorage(cep);
  }

  detalhesBusca(cep: string): void {
    let cepResult = this.cepService.getCepLocalStorage(cep);

    if (cepResult !== undefined) {
      this.cepModel = cepResult;
      this.showModal = true;
    }
  }

  emitCloseModal($event: boolean): void {
    this.showModal = $event;
  }
}
