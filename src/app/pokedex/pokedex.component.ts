import { Component, OnInit, Input } from '@angular/core';
import {PokemonModel} from '../_models/pokemon.model';
import {PokedexModel} from '../_models/pokedex.model';
import data from '../_models/pokemon.data.js';

@Component({
  selector: 'pkd-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokedex: PokedexModel = new PokedexModel(new Array());
  pokemonHover: String;

  constructor() {
    let pokemons = data;
    pokemons.forEach(element => {
      this.pokedex.pokemons.push(element);
    });
    this.pokemonHover = '';
  }

  ngOnInit() {
  }

  PokemonHovered(pokemon: PokemonModel) {
    this.pokemonHover = pokemon.specie;
  }

  PokemonOnHovered() {
    this.pokemonHover = '';
  }
}
