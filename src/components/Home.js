import { useState, useEffect } from "react";
import PokemonService from "../pokemons.service";
import { Link } from "react-router-dom";

export default function Home() {
  // https://reactjs.org/docs/hooks-state.html#tip-what-do-square-brackets-mean
  const [pokemon, setPokemon] = useState(null);

  // Equivalent to componentDidMount
  // https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    const pokemonService = new PokemonService();
    pokemonService.getRandomPokemon().then((pokemon) => {
      setPokemon(pokemon);
    });

    // Equivalent to componentWillUnmount
    // https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    return () => {
      setPokemon(null);
    };
  }, []);

  return (
    <div className="Home">
      <h2>Home</h2>
      {pokemon && (
        <div>
          <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
          <Link to={`pokemon/${pokemon.pokedexId}`}><h3>{pokemon.name.fr}</h3></Link>
        </div>
      )}
    </div>
  );
}
