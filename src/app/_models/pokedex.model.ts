import {PokemonModel} from '../_models/pokemon.model';

export class PokedexModel {
    public pokemons: Array<PokemonModel>;

    constructor(pokemons) {
        this.pokemons = pokemons;
    }
}