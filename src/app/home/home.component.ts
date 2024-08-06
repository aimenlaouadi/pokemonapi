import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../typescript/entites';
import { ServiceService } from '../service/service.service';
import { ModalComponent } from '../modal/modal.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { FormulaireComponent } from '../formulaire/formulaire.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, ModalComponent, RouterLink, FormsModule, FormulaireComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private service: ServiceService) {}

  pokemons: Pokemon[] = [];
  filters = {
    name: '',
    category: '',
    type: ''
  };
  categories: string[] = [];
  types: string[] = [];
  pokemonParent: Pokemon | undefined;

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.service.fetchAll().subscribe(data => {
      this.pokemons = data.splice(0,9);
      this.extractCategoriesAndTypes();
    });
  }

  getSelectPokemon(pokemon: Pokemon) {
    this.pokemonParent = pokemon;
  }

  filteredPokemons(): Pokemon[] {
    return this.pokemons.filter(pokemon => 
      (!this.filters.name || pokemon.name.fr.toLowerCase().includes(this.filters.name.toLowerCase())) &&
      (!this.filters.category || pokemon.category.toLowerCase() === this.filters.category.toLowerCase()) &&
      (!this.filters.type || pokemon.types.some(type => type.name.toLowerCase() === this.filters.type.toLowerCase()))
    );
  }

  extractCategoriesAndTypes() {
    const categoriesSet = new Set<string>();
    const typesSet = new Set<string>();

    this.pokemons.forEach(pokemon => {
      categoriesSet.add(pokemon.category);
      pokemon.types.forEach(type => {
        typesSet.add(type.name);
      });
    });

    this.categories = Array.from(categoriesSet);
    this.types = Array.from(typesSet);
  }
}
