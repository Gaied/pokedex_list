export enum Type {
    Feu,
    Eau,
    Electrique,
    Poisson,
    Plante

}
export class PokemonModel {
    specie: String;
    description: String;
    types: Array<Type>

    constructor({specie, description, types}){
        this.specie= specie;
        this.description= description;
        this.types= types;

    }
}