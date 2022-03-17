import React from "react";
import "./PokemonTriviaContaine.css";



const PokemonTriviaContainer = () => {
    return (
        <div class="pokemon-trivia-container">
            <div class="pokemon-description-container">
                <h3>
                    Description

                </h3>
                <p>
                    The diamond shape crystals on its body exper air as cold as -240 degrees Fahrenheit, surrounding its enemies and encasing them in ice

                </p>
            </div>
            <div class="card-container">
                <div class="pokemon-stats-container grass">
                    <div class="stat-wrapper">
                        <span class="stat-title">
                            HP
                        </span>
                        <span class="stat-line" >

                        </span>
                        <span class="stat-value">
                            124
                        </span>
                    </div>
                    <div class="stat-wrapper">
                        <span class="stat-title">
                            Attack
                        </span>
                        <span class="stat-line" >

                        </span>
                        <span class="stat-value">
                            69
                        </span>
                    </div>
                    <div class="stat-wrapper">
                        <span class="stat-title">
                            Defense
                        </span>
                        <span class="stat-line">

                        </span>
                        <span class="stat-value">
                            255
                        </span>
                    </div>
                    <div class="stat-wrapper"><span class="stat-title">
                        Speed
                    </span>
                        <span class="stat-line" >
                        </span>
                        <span class="stat-value">
                            33
                        </span>
                    </div>
                    <div class="stat-wrapper">
                        <span class="stat-title">
                            Special Attack
                        </span>
                        <span class="stat-line" >
                        </span><span class="stat-value">
                            85
                        </span>
                    </div>
                    <div class="stat-wrapper">
                        <span class="stat-title">
                            Special Defense
                        </span>
                        <span class="stat-line" >
                        </span>
                        <span class="stat-value">
                            188
                        </span>
                    </div>
                </div>
            </div>
            <div class="card-container">
                <div class="pokemon-evolutions-container grass">
                    <a id="1" href="/pokemon/1">
                        <div class="evolution-wrapper grass-hover">
                            <div class="evolution-title">
                                Bulbasaur
                            </div>
                            <div class="evolution-id">
                                #001
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Pokemon" />
                        </div></a><a id="2" href="/pokemon/2">
                        <div class="evolution-wrapper grass-hover">
                            <div class="evolution-title">
                                Ivysaur
                            </div>
                            <div class="evolution-id">
                                #002
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" alt="Pokemon" />
                        </div>
                    </a>
                    <a id="3" href="/pokemon/3">
                        <div class="evolution-wrapper grass-hover">
                            <div class="evolution-title">
                                Venusaur
                            </div>
                            <div class="evolution-id">
                                #003
                            </div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" alt="Pokemon" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}


export default PokemonTriviaContainer;
