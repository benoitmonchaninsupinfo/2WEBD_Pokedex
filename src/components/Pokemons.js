import { useState, useEffect } from "react";
import PokemonService from "../pokemons.service";
import { PokemonList } from "./PokemonList/PokemonList";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const pokemonService = new PokemonService();
    pokemonService.getPokemons().then((pokemons) => {
      setPokemons(pokemons);
    });

    return () => {
      setPokemons([]);
    };
  }, []);

  return (
    <div className="Pokemons">
      <h2>Pokemons</h2>
      {pokemons && <PokemonList pokemons={pokemons} />}
    </div>
  );
}
