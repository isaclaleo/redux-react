import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { getPokemon, getPokemonsDetails } from "../api";
// import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: [],
};

export const fecthPokemonsWdatails = createAsyncThunk(
    'data/fecthPokemonsWdatails',
    async(_, {dispatch}) => {
    //   dispatch(setLoading(true))  
      const pokemonsRes=  await getPokemon();
      const pokemonDataiel = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonsDetails(pokemon)));
        dispatch(setPokemons(pokemonDataiel));
    //   dispatch(setLoading(false));  
    }
);


export const dataSlice = createSlice ({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const CurrentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonid
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