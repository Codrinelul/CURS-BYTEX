import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card';
import "./App.css"
import PokemonPage from '../pokemonPage/PokemonPage';


function App() {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=1')
  //limit=10000 pentru tori pokemonii
  const [searchTerm, setSearchTerm] = useState("")
  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemons(currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }
  console.log(allPokemons);
  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className="App">
      <div className='appContainer'>
        <div className='appHeader '>
          <h1 className='pokedexTitle'>Pokedex</h1>
          <input placeholder="Search pokemon name, number or type..." maxlength="33" class="searchBar" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <PokemonPage />
        <div className="pokemonContainer">

          {allPokemons.filter((pokemonStats) => {
            if (searchTerm === "") {
              return pokemonStats
            } else if (pokemonStats.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return pokemonStats
            }
          }).map((pokemonStats, key) =>
            <Card
              key={key}
              id={pokemonStats.id}
              image={pokemonStats.sprites.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            // typeTwo={ }
            // am eroarea asta aici!!!
            />)}

        </div>
        <button className="loadMore" onClick={() => getAllPokemons()}>Load More</button>
      </div>
    </div>
  );
}

export default App;