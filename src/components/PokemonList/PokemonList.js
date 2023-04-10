import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import "./PokemonList.css";

const POKEMONS_PER_PAGE = 12;

export function PokemonList({ pokemons }) {
  const [page, setPage] = useState(1);
  const [numberOfPage, setNumberOfPage] = useState(1);

  useEffect(() => {
    setNumberOfPage(Math.ceil(pokemons.length / POKEMONS_PER_PAGE));
  }, [pokemons]);

  const nextPage = useCallback(() => {
    if (page < numberOfPage) {
      setPage(page + 1);
    }
  }, [page, numberOfPage]);

  const prevPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  return (
    <div className="PokemonList">
      <div className="pagination">
        <button onClick={() => prevPage()}>{`<`}</button>
        {`${page} of ${numberOfPage}`}
        <button onClick={() => nextPage()}>{`>`}</button>
      </div>
      <div className="list">
        {pokemons
          .slice(POKEMONS_PER_PAGE * (page - 1), POKEMONS_PER_PAGE * page)
          .map((pokemon) => (
            <div key={pokemon.pokedexId} className="pokemon">
              <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
              <Link to={`/pokemon/${pokemon.pokedexId}`}>
                {pokemon.name.fr}
              </Link>
            </div>
          ))}
      </div>
      <div className="pagination">
        <button onClick={() => prevPage()}>{`<`}</button>
        {`${page} of ${numberOfPage}`}
        <button onClick={() => nextPage()}>{`>`}</button>
      </div>
    </div>
  );
}
