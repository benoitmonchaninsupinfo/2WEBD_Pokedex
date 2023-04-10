import { useState, useEffect } from "react";
import PokemonService from "../../pokemons.service";
import { Link } from "react-router-dom";

import './Home.css';

export default function Home() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const pokemonService = new PokemonService();
    pokemonService.getRandomPokemon().then((pokemon) => {
      setPokemon(pokemon);
    });

    return () => {
      setPokemon(null);
    };
  }, []);

  return (
    <div className="Home">
      {pokemon && (
        <div className="Pokemon">
          <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
          <Link to={`pokemon/${pokemon.pokedexId}`}><h3>{pokemon.name.fr}</h3></Link>
        </div>
      )}
    </div>
  );
}
