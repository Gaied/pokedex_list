export enum Type {
    Feu,
    Eau,
    Elec

}
export class PokemonModel {
    specie: String;
    description: String;
    types: Type

    constructor(specie: String, description: String, types: Type){
        this.specie= specie;
        this.description= description;
        this.types= types;

    }
}