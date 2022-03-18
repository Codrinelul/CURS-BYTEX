import React from "react";
import "./PrincipalPokemonCard.css"

const CardContainer = ({ id, image, name, type, }) => {

    return (
        <div class="card-container">
            <div class="pokemon-artwork-card grass">
                <div class="pokemon-artwork-card-header">
                    <span class="pokemon-id-info">
                        <div class="pokemon-name">
                            {name}
                        </div>
                        <div class="pokemon-id">
                            #0{id}
                        </div>
                    </span>
                    <span class="pokemon-types-container">
                        <span class="type-card-container">

                            {type}
                        </span>
                        <span class="type-card-container">

                            Poison
                        </span>
                    </span>
                </div>
                <img class="pokemon-artwork" src={image} alt={name} />
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