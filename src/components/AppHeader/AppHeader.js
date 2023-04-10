import { NavLink } from "react-router-dom";

import './AppHeader.css'

function activeLinkClass({ isActive }) {
  return isActive ? "active" : ""
}

export default function AppHeader() {
  return (
    <header className="AppHeader">
      <h1>React Pokedex</h1>
      <nav>
        <NavLink to="/" className={activeLinkClass}>Home</NavLink>
        <NavLink to="/pokemons">Pokemons</NavLink>
        <NavLink to="/generations">Generations</NavLink>
      </nav>
    </header>
  );
}