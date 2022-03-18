import React, { useState, useEffect } from 'react';
import "./PokemonPage.css"
import CardContainer from "../../components/PrincipalPokemonCard/PrincipalPokemonCard";
import PokemonTriviaContainer from "../../components/PokemonTriviaContainer/PokemonTriviaContainer";
import SpritesContainer from "../../components/SpritesContainer/SpritesContainer";
import axios from 'axios';
import { useParams } from "react-router-dom";

const PokemonPage = ({ details }) => {
    const [pokemonDetails, setPokemonDetails] = useState();

    const { id } = useParams();
    // const id = match.params.id;

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