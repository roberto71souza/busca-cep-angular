import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from '../model/cep';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  public buscaCep(cep: string): Observable<Cep> {
    return this.http.get<Cep>(`${environment.baseUrlViaCep}/${cep}/json`);
  }

  private setCepLocalStorage(cepList: Cep[]): void {
    sessionStorage.removeItem('cep');

    sessionStorage.setItem('cep', JSON.stringify(cepList));
  }

  public getCepListLocalStorage(): Cep[] {
    return JSON.parse(sessionStorage.getItem('cep') || '[]') as Cep[];
  }

  public addCepItem(newCep: Cep): void {
    let cepList = this.getCepListLocalStorage();

    cepList.push(newCep);

    this.setCepLocalStorage(cepList);
  }

  public getCepLocalStorage(cep: string): Cep {
    let cepList = this.getCepListLocalStorage();

    let itemCep: Cep | any;

    itemCep = cepList.find((item: Cep) => item.cep == cep);

    return itemCep;
  }

  public removeCepLocalStorage(cep: string): void {
    let cepList = this.getCepListLocalStorage();

    let newCepList = new Array<Cep>();

    newCepList = cepList.filter((item) => item.cep !== cep);

    this.setCepLocalStorage(newCepList);
  }
}
