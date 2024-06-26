import { NgFor } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { TypescriptComponent } from '../typescript/typescript.component';
import { Pokemon, TypePokemon } from '../typescript/entites';



@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgFor, TypescriptComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() pokemonEnfant: Pokemon | undefined;
}
