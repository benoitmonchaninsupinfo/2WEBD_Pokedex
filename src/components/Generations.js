import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokemonService from "../pokemons.service";

export default function Generations() {
  const [generations, setGenerations] = useState([]);

  useEffect(() => {
    const pokemonService = new PokemonService();
    pokemonService.getGenerations().then((generations) => {
      setGenerations(generations);
    });

    return () => {
      setGenerations([]);
    };
  }, []);

  return (
    <div className="Generations">
      <h2>Generations</h2>
      <ul>
        {generations.map((generation) => (
          <li key={generation.generation}>
            <Link to={`/generation/${generation.generation}`}>
              Generation {generation.generation} (from {generation.from} to {generation.to})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
