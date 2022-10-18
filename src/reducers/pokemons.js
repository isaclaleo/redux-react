import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialstate = {
    pokemons: [],
    loading: false,
};

export const pokemonsReducers = ( state = initialstate, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {...state, pokemons: action.payload};
        case SET_FAVORITE:
            const newPokemonList = [...state.pokemons];
            const CurrentPokemonIndex = newPokemonList.findIndex((pokemon) => {
               return pokemon.id === action.payload.pokemon.Id
            }) ;

            if (CurrentPokemonIndex < 0) {
                return state;
            }
            newPokemonList[CurrentPokemonIndex].favorite = !newPokemonList[CurrentPokemonIndex].favorite;

            return {...state, pokemons: newPokemonList};
        case SET_LOADING: 
        return { ...state, loading: action.payload};
        default:
            return state;
    }
}