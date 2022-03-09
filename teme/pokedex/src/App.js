import React, { useEffect, useState } from 'react'
import Card from './components/Card/Card';



function App() {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemons(currentList => [...currentList, data])

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
        <h1 className='appHeader'>Pokedex</h1>
        <div className="pokemonContainer">

          {allPokemons.map((pokemonStats, index) =>
            <Card
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            // typeTwo={pokemonStats.types[0].type.name}
            />)}

        </div>
      </div>
    </div>
  );
}

export default App;
