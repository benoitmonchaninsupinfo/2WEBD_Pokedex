export default class PokemonService {
  API_URL = 'https://api-pokemon-fr.vercel.app/api/v1/';
  POKEMONS_ID_RANGE = [0, 1010];

  async getPokemons() {
    const res = await fetch(`${this.API_URL}pokemon`);
    const json =  await res.json();
    console.log('GET /pokemon', json);
    return json;
  }

  async getPokemon(id) {
    const res = await fetch(`${this.API_URL}pokemon/${id}`);
    const json =  await res.json();
    console.log(`GET /pokemon/${id}`, json);
    return json;
  }

  async getRandomPokemon() {
    const id = this._getRandomInt(...this.POKEMONS_ID_RANGE);
    return this.getPokemon(id);
  }

  async getGenerations() {
    const res = await fetch(`${this.API_URL}gen`);
    const json =  await res.json();
    console.log('GET /gen', json);
    return json;
  }

  async getGeneration(id) {
    const res = await fetch(`${this.API_URL}gen/${id}`);
    const json =  await res.json();
    console.log(`GET /gen/${id}`, json);
    return json;
  }

  // Get a random integer between min and max (included)
  _getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
