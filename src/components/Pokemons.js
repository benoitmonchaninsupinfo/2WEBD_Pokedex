import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import PokemonService from "../pokemons.service";

const POKEMONS_PER_PAGE = 10;

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPage, setNumberOfPage] = useState(1);

  useEffect(() => {
    const pokemonService = new PokemonService();
    pokemonService.getPokemons().then((pokemons) => {
      setNumberOfPage(Math.ceil(pokemons.length / POKEMONS_PER_PAGE));
      setPokemons(pokemons);
    });

    return () => {
      setPokemons([]);
    };
  }, []);

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
    <div className="Pokemons">
      <h2>Pokemons</h2>
      {pokemons && (
        <>
          <div>
            {pokemons
              .slice(POKEMONS_PER_PAGE * (page - 1), POKEMONS_PER_PAGE * page)
              .map((pokemon) => (
                <div key={pokemon.pokedexId}>
                  <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
                  <Link to={`/pokemon/${pokemon.pokedexId}`}>
                    {pokemon.name.fr}
                  </Link>
                </div>
              ))}
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
