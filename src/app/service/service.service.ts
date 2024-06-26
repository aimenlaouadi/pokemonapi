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

  add(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.url, pokemon);
  }

  delete(id: any): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  fetchFiltered(filters: { name?: string; category?: string; type?: string }): Observable<Pokemon[]> {
    let params = new HttpParams();
    if (filters.name) {
      params = params.set('name', filters.name);
    }
    if (filters.category) {
      params = params.set('category', filters.category);
    }
    if (filters.type) {
      params = params.set('type', filters.type);
    }
    return this.http.get<Pokemon[]>(this.url, { params });
  }
}
