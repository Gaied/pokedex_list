import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PokemonModel} from '../_models/pokemon.model';

@Component({
  selector: 'pkd-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input()  pokemon: PokemonModel;
  @Output() pokemonHovered: EventEmitter<PokemonModel> = new EventEmitter();
  @Output() pokemonAnyHovered: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  On() {
    this.pokemonHovered.emit(this.pokemon);
  }

  Out() {
    this.pokemonAnyHovered.emit();
  }

}
