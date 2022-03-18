import React from "react";
import "./SpritesContainer.css"


const SpritesContainer = ({ frontMale, backMale, frontFemale, backFemale }) => {
    return (
        <div class="card-container">
            <div class="sprites-container grass">
                <h2>
                    Sprites
                </h2>
                <div class="sprites">
                    <div class="sprite"><div class="sprite-title">
                        Front Male
                    </div>
                        <img class="sprite-image" src={frontMale} alt="Pokemon"
                        /></div>
                    <div class="sprite">
                        <div class="sprite-title">
                            Back Male
                        </div>
                        <img class="sprite-image" src={backMale} alt="Pokemon" />
                    </div>
                    <div class="sprite">
                        <div class="sprite-title">
                            Front Female
                        </div>
                        <img class="sprite-image" src={frontFemale} alt="Pokemon" />
                    </div>
                    <div class="sprite">
                        <div class="sprite-title">
                            Back Female
                        </div>
                        <img class="sprite-image" src={backFemale} alt="Pokemon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpritesContainer;