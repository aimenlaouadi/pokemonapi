import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { PokemonService } from '../service/pokemon.service'; // Assurez-vous de créer et d'importer un service approprié
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class FormulaireComponent {
  pokemons: any[] = [];
  Pokemon = {
    name: '',
    category: ''
   
  };

  constructor(private pokemonService: PokemonService) {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getPokemons().subscribe((data: any[]) => {
      this.pokemons = data;
    });
  }

  onSubmit() {
    this.pokemonService.addPokemon(this.Pokemon).subscribe(newPokemon => {
      this.pokemons.push(newPokemon);
      this.Pokemon = {
        name: '',
        category: ''
        
      };
    });
  }

  deletePokemon(pokedex_id: number) {
    this.pokemonService.deletePokemon(pokedex_id).subscribe(() => {
      this.pokemons = this.pokemons.filter(pokemon => pokemon.pokedex_id !== pokedex_id);
    });
  }
}
