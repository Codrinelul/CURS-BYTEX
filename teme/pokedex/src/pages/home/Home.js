import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../../components/Card/Card';
import "./Home.css"


const Home = () => {
  // const [allPokemons, setAllPokemons] = useState([])

  // //limit=10000 pentru tori pokemonii
  // const [searchTerm, setSearchTerm] = useState("")
  // const getAllPokemons = async () => {
  //   const res = await fetch(loadMore)
  //   const data = await res.json()

  //   setLoadMore(data.next)

  //     function createPokemonObject(results) {
  //       results.forEach(async pokemon => {
  //         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
  //         const data = await res.json()
  //         setAllPokemons(currentList => [...currentList, data])
  //         await allPokemons.sort((a, b) => a.id - b.id)
  //       })
  //     }
  //     createPokemonObject(data.results)
  //   }
  //   console.log(allPokemons);
  //   useEffect(() => {
  //     getAllPokemons()
  //   }, [])
  //   const getPokemonList = async () => {
  //     let pokemonArray = [];
  //     for (let i = 1; i <= 151; i++) {
  //       pokemonArray.push(await getPokemonData(i));
  //     }
  //     console.log(pokemonArray);
  //     setPokemon(pokemonArray);
  //     setLoading(false);
  //   }

  //   const getPokemonData = async (id) => {
  //     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  //     return res;
  //   }

  //   useEffect(() => {
  //     getPokemonList();
  //   }, [])
  const [pokemon, setPokemon] = useState([]);


  const getPokemonList = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 151; i++) {
      pokemonArray.push(await getPokemonData(i));
    }
    console.log(pokemonArray);
    setPokemon(pokemonArray);

  }

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  }

  useEffect(() => {
    getPokemonList();
  }, [])

  return (
    <div className=''>

      <div className='appHeader '>
        <h1 className='pokedexTitle'>Pokedex</h1>
        {/* <input placeholder="Search pokemon name, number or type..." maxlength="33" class="searchBar" onChange={(event) => {
          setSearchTerm(event.target.value);
        }} /> */}
      </div>
      {/* <PokemonPage /> */}
      <div className="pokemonContainer">

        {/* {allPokemons.filter((pokemonStats) => {
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
          />)} */}
        {pokemon.map(p => (
          <Card
            key={p.data.name}
            id={p.data.id}
            image={p.data.sprites.front_default}
            name={p.data.name}
            type={p.data.types[0].type.name}
          // typeTwo={ }
          // am eroarea asta aici!!!
          />))}
      </div>

    </div>

  );
}

export default Home;
