import React from 'react';

import "./card.css";


const Card = ({ id, image, name, type, typeTwo }) => {
    const style = type + " card";
    const styleTwo = typeTwo + " card";
    return (


        <div className={`cardContainer ${style}`}>

            <div className="cardHeader">
                <h3>{name}</h3>
                <h4>#0{id}</h4>
            </div>
            <div className="cardBody">
                <div className="pokemonTypesContainer">
                    <div className={`pokemonType ${style}`} >
                        {type}
                    </div>
                    <div className={`pokemonType ${styleTwo}`} >
                        {typeTwo}
                    </div>
                </div>
                <div className="pokemonPhoto">
                    <img src={image} alt={name} />
                </div>

            </div>
        </div>

    );
};

export default Card;