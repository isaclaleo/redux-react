import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types"
import { getPokemonsDetails } from "../api";



export const setpokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
});

export const setloading = (payload) => ({
    type: SET_LOADING,
    payload,
});


export const  setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload,
});


export const getpokemonWDatails = 
(pokemons = [] ) => 
async (dispatch) => {
    const pokemonDataiel = await Promise.all(
        pokemons.map((pokemon) => getPokemonsDetails(pokemon)));
    dispatch(setpokemons(pokemonDataiel));
};