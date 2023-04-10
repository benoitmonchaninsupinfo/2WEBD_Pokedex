import { Link } from "react-router-dom";

export default function AppHeader() {
  return (
    <header className="AppHeader">
      <h1>React Pokedex</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokemons">Pokemons</Link>
          </li>
          <li>
            <Link to="/generations">Generations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}