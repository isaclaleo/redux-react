import PokemonCard from "./pokemonCard";

const PokemonsList = ( { pokemons }) => {
    
    return (
        <div className="PokemonsList">
            { pokemons.map((pokemon) => {
                return <PokemonCard 
                name={pokemon.name} 
                key={pokemon.name}
                image={pokemon.sprites.front_default}
                types={pokemon.types}
                id={pokemon.id} />
            })}
        </div>
    );
};

PokemonsList.defaultProps = {
    pokemons: Array(10).fill(''),
}

export default PokemonsList;

