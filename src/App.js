import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Pokemons from "./components/Pokemons";
import Pokemon from "./components/Pokemon";
import Generations from "./components/Generations";
import Generation from "./components/Generation";
import AppHeader from "./components/AppHeader";

function App() {
  return (
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
  );
}

export default App;
