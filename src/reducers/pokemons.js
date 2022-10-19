import { fromJS } from "immutable";
import { SET_FAVORITE,  SET_POKEMONS } from "../actions/types";

const initialstate = fromJS({
    pokemons: [],
    loading: false,
});

export const pokemonsReducers = ( state = initialstate, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            // return {...state, pokemons: action.payload};
            return state.setIn(['pokemons'], fromJS(action.payload));
        case SET_FAVORITE:
            const CurrentPokemonIndex = state.get('pokemons').findIndex((pokemon) => {
               return pokemon.get('id') === action.payload.pokemon.Id
            }) ;

            if (CurrentPokemonIndex < 0) {
                return state;
            }
            
            const isfavorite = state.getIn(['pokemons', CurrentPokemonIndex, 'favorite']);

            return state.setIn(['pokemons', CurrentPokemonIndex, 'favorite'], !isfavorite);

            // case SET_LOADING: 
            // return { ...state, loading: action.payload};
        default:
            return state;
    }
}