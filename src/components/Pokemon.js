import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonService from "../pokemons.service";

export default function Pokemon() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const pokemonService = new PokemonService();
    pokemonService.getPokemon(params.id).then((pokemon) => {
      setPokemon(pokemon);
    });

    return () => {
      setPokemon(null);
    };
  }, [params.id]);

  return (
    <div className="Pokemon">
      <h1>Pokemon</h1>
      {pokemon && (
        <div>
          <h2>{pokemon.name.fr}</h2>
          <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />

          <h3>Types</h3>
          <ul>
            {pokemon.types.map((type) => (
              <li key={type.name}>{type.name}</li>
            ))}
          </ul>

          <h3>Stats</h3>
          <ul>
            {Object.keys(pokemon.stats).map((key) => (
              <li key={key}>
                <strong>{key}</strong>: {pokemon.stats[key]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
