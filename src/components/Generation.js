import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonService from "../pokemons.service";
import { PokemonList } from "./PokemonList/PokemonList";

export default function Generation() {
  const { id } = useParams();
  const [generation, setGeneration] = useState(null);

  useEffect(() => {
    const pokemonService = new PokemonService();
    pokemonService.getGeneration(id).then((generation) => {
      setGeneration(generation);
    });

    return () => {
      setGeneration(null);
    };
  }, [id]);

  return (
    <div className="Generation">
      <h2>{`Generation ${id}`}</h2>
      {generation && <PokemonList pokemons={generation} />}
    </div>
  );
}
