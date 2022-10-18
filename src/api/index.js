import axios from "axios";

export const getPokemon = ( ) => {
    return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=152')
    .then(res => res.data.results)
    .catch((erro) => console.log(erro));
};


export const getPokemonsDetails = (pokemon) => {
    return axios
    .get(pokemon.url)
    .then(res => res.data)
    .catch((erro) => console.log(erro));
}