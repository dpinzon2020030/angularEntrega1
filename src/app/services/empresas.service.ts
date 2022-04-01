import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresas.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  public url: String = 'http://localhost:4500/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(public _http: HttpClient) { }

  obtenerEmpresa(): Observable<any>{

    return this._http.get(this.url + '/empresas', {headers: this.headersVariable})
  }

  agregarEmpresa(empresaModel: Empresa): Observable<any>{
    let parametros = JSON.stringify(empresaModel)

    return this._http.post(this.url + '/registrarEmpresa', parametros, {headers: this.headersVariable})
  }
}
