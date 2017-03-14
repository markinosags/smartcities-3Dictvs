import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AnuncioService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AnuncioService {
  static get parameters() {
        return [[Http]];
    }
  
  constructor(private http: Http) {
    anuncios(anuncio) {
        var url = 'http://datos.gijon.es/doc/informacion/anuncios.json';
        var response = this.http.post(url).map(res => res.json());
        return response;
    }
  }

}
