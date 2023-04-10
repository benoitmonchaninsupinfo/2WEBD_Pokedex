import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import PokemonService from "../pokemons.service";

const POKEMONS_PER_PAGE = 10;

export default function Generation() {
  const { id } = useParams();
  const [generation, setGeneration] = useState(null);
  const [page, setPage] = useState(1);
  const [numberOfPage, setNumberOfPage] = useState(1);

  useEffect(() => {
    const pokemonService = new PokemonService();
    pokemonService.getGeneration(id).then((generation) => {
      setNumberOfPage(Math.ceil(generation.length / POKEMONS_PER_PAGE));
      setGeneration(generation);
    });

    return () => {
      setGeneration(null);
    };
  }, [id]);

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
    <div className="Generation">
      <h2>{`Generation ${id}`}</h2>
      {generation && (
        <>
          <div>
            <h3>Pokemons</h3>
            <ul>
              {generation.slice(POKEMONS_PER_PAGE * (page - 1), POKEMONS_PER_PAGE * page).map((pokemon) => (
                <li key={pokemon.pokedexId}>
                  <Link to={`/pokemon/${pokemon.pokedexId}`}>{pokemon.name.fr}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button onClick={() => prevPage()}>{`<`}</button>
            {`${page} of ${numberOfPage}`}
            <button onClick={() => nextPage()}>{`>`}</button>
          </div>
        </>
      )}
    </div>
  );
}
