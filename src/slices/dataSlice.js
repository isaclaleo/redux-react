import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemons: [],
};


export const dataSlice = createSlice ({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const CurrentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemon.Id
             }) ;
 
             if (CurrentPokemonIndex >= 0) {
                const isfavorite = state.pokemons[CurrentPokemonIndex].favorite;
                state.pokemons[CurrentPokemonIndex].favorite = !isfavorite
             }
        }
    }
})

export const { setFavorite, setPokemons } = dataSlice.actions;
console.log('dataSlice', dataSlice);

export default dataSlice.reducer;