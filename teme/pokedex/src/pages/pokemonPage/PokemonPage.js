import React from "react";
import "./PokemonPage.css"
import CardContainer from "../../components/PrincipalPokemonCard/PrincipalPokemonCard";
import PokemonTriviaContainer from "../../components/PokemonTriviaContainer/PokemonTriviaContainer";
import SpritesContainer from "../../components/SpritesContainer/SpritesContainer";
function PokemonPage() {

    return (
        <div>


            <div class="pokemon-content">
                <div class="pokemon-content-upper">
                    <CardContainer />
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