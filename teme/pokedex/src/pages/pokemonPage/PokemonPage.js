import React, { useState, useEffect } from 'react';
import "./PokemonPage.css"
import CardContainer from "../../components/PrincipalPokemonCard/PrincipalPokemonCard";
import PokemonTriviaContainer from "../../components/PokemonTriviaContainer/PokemonTriviaContainer";
import SpritesContainer from "../../components/SpritesContainer/SpritesContainer";
import axios from 'axios';
import { useParams } from "react-router-dom";
//si aici trebuie sa schimbt tot

//over all am pierdut super mult timp incercand sa inteleg de ce nu merge pagina asta dar este oke ca am invatat alte chestii 
const PokemonPage = ({ match }) => {
    const [pokemonDetails, setPokemonDetails] = useState();

    // const { id } = useParams();
    const id = match.params.id;

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
        console.log(details.data)

    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon(id);
    }, [])

    return (
        <div>


            <div class="pokemon-content">
                <div class="pokemon-content-upper">
                    <CardContainer
                        key={pokemonDetails.data.name}
                        id={pokemonDetails.data.id}
                        image={pokemonDetails.data.sprites.front_default}
                        name={pokemonDetails.data.name}
                        type={pokemonDetails.data.types[0].type.name}
                    />

                    {/* la pokemon types ma gandeam sa fac ceva de genul {pokemonDetails.types.map(t => (
                                            <div key={t.type.name}>
                                                <div className={`${t.type.name}`} >
                                                    {t.type.name.toUpperCase()}
                                                </div>
                                            </div>
                                        ))} */}

                    {/* sprites container si trivia container trebuie refacut pentru urmatoarea ora */}
                    <PokemonTriviaContainer />
                </div>
                <div class="pokemon-content-lower">
                    <SpritesContainer />
                </div>
            </div>

        </div>



    );
}


export default PokemonPage