export interface Pokemon {
    pokedex_id?:number,
    category:string,
    sprites:Sprites,
    name:{'fr': string, 'en': string},
    sexe:{'male': string, 'female': string},
    types:TypePokemon[],
    

}

export interface  Sprites{
    regular:string,
    shiny:string,
}


export interface  TypePokemon{
    name:string,
    image:string,
}