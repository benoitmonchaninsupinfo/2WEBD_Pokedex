import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Pokemons from "./components/Pokemons";
import Pokemon from "./components/Pokemon/Pokemon";
import Generations from "./components/Generations/Generations";
import Generation from "./components/Generation";
import AppHeader from "./components/AppHeader/AppHeader";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons/" element={<Pokemons />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/generations" element={<Generations />} />
          <Route path="/generation/:id" element={<Generation />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
