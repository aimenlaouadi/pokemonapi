import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../typescript/entites';  // Assurez-vous que ce chemin est correct

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = "https://tyradex.vercel.app/api/v1/gen/1";

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url);
  }

  fetch(id: any): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}/${id}`);
  }

}
