import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estado } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {

  private apiUrl: string = environment.apiUrl;


  constructor(
    private httpClient: HttpClient
  ) { }

  listar () : Observable<Estado[]> {
    return this.httpClient.get<Estado[]>(`${this.apiUrl}/estados`)
  }
}
