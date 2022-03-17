import React from "react";
import "./SpritesContainer.css"


const SpritesContainer = () => {
    return (
        <div class="card-container">
            <div class="sprites-container grass">
                <h2>
                    Sprites
                </h2>
                <div class="sprites">
                    <div class="sprite"><div class="sprite-title">
                        Front Female
                    </div>
                        <img class="sprite-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="Pokemon"
                        /></div>
                    <div class="sprite">
                        <div class="sprite-title">
                            Front Female
                        </div>
                        <img class="sprite-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png" alt="Pokemon" />
                    </div>
                    <div class="sprite">
                        <div class="sprite-title">
                            Front Female
                        </div>
                        <img class="sprite-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png" alt="Pokemon" />
                    </div>
                    <div class="sprite">
                        <div class="sprite-title">
                            Front Female
                        </div>
                        <img class="sprite-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png" alt="Pokemon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpritesContainer;