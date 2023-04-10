import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonService from "../../pokemons.service";

import "./Pokemon.css";

// hp	atk	def	spe_atk	spe_def	vit
const STATS_KEYS = {
  hp: "Health Points",
  atk: "Attack",
  def: "Defense",
  spe_atk: "Special Attack",
  spe_def: "Special Defense",
  vit: "Rapidity",
};

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
      {pokemon && (
        <>
          <h1>{pokemon.name.fr}</h1>
          <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />

          <div className="types">
            {pokemon.types.map((type) => (
              <div key={type.name} className="type">
                <span>{type.name}</span>
                <img src={type.image} alt={type.name} />
              </div>
            ))}
          </div>

          <div className="stats">
            <h3>Stats</h3>
            <table>
              <tbody>
                {Object.keys(pokemon.stats).map((key) => (
                  <tr key={key}>
                    <th>{STATS_KEYS[key]}</th>
                    <td>{pokemon.stats[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
