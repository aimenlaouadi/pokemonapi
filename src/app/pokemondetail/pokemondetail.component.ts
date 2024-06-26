import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../typescript/entites';
import { Comment } from '@angular/compiler';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-pokemondetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemondetail.component.html',
  styleUrl: './pokemondetail.component.css'
})
export class PokemondetailComponent implements OnInit {

  constructor(private service: ServiceService, private route:ActivatedRoute){}

pokemon:Pokemon | undefined;


ngOnInit(): void {
  this.fetchOne();
}


fetchOne(){
  const id = this.route.snapshot.paramMap.get('id');
  
  this.service.fetch(id).subscribe(data =>{
  this.pokemon = data;
  console.log(this.pokemon);
  })
}


}
