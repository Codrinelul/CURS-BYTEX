import React from "react";
import "./PrincipalPokemonCard.css"

const CardContainer = () => {

    return (
        <div class="card-container">
            <div class="pokemon-artwork-card grass">
                <div class="pokemon-artwork-card-header">
                    <span class="pokemon-id-info">
                        <div class="pokemon-name">
                            Ivysaur
                        </div>
                        <div class="pokemon-id">
                            #002
                        </div>
                    </span>
                    <span class="pokemon-types-container">
                        <span class="type-card-container">

                            Grass
                        </span>
                        <span class="type-card-container">

                            Poison
                        </span>
                    </span>
                </div>
                <img class="pokemon-artwork" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" alt="Pokemon" />
                <div class="pokemon-info-container">
                    <span class="pokemon-info-block">
                        <div class="pokemon-info-header">
                            Hello
                        </div>
                        <div class="pokemon-info-content">
                            World
                        </div>
                    </span>
                    <span class="pokemon-info-block">
                        <div class="pokemon-info-header">
                            Hello
                        </div>
                        <div class="pokemon-info-content"
                        >World
                        </div>
                    </span>
                    <span class="pokemon-info-block">
                        <div class="pokemon-info-header">
                            Hello
                        </div>
                        <div class="pokemon-info-content">
                            World
                        </div>
                    </span>
                    <span class="pokemon-info-block">
                        <div class="pokemon-info-header">
                            Hello
                        </div>
                        <div class="pokemon-info-content">
                            World
                        </div>
                    </span>
                    <span class="pokemon-info-block">
                        <div class="pokemon-info-header">
                            Hello
                        </div>
                        <div class="pokemon-info-content">
                            World
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );

};

export default CardContainer;