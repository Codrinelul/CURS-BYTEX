import React from 'react';
import Types from "../types/types"
import "./card.css";


const Card = ({ id, image, name, type, typeTwo }) => {
    const style = type + " card";
    return (


        <div className={` other cardContainer ${style}`}>

            <div className="cardHeader">
                <h3>{name}</h3>
                <h4>#0{id}</h4>
            </div>
            <div className="cardBody">
                <Types type={type} />
                <div className="pokemonPhoto">
                    <img src={image} alt={name} />
                </div>

            </div>
        </div>

    );
};

export default Card;