import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://tyradex.vercel.app/api/v1/gen/1'; 

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPokemon(pokemon: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pokemon);
  }

  deletePokemon(pokedex_id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${pokedex_id}`);
  }
}
