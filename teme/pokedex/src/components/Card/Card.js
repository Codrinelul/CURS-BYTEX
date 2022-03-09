import React from 'react';

import "./card.css";


const Card = ({ id, image, name, type, typeTwo, _callback }) => {
    const style = type + " card";

    return (
        <div className="pokemonContainer" >

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
                        {/* <div className={`pokemonType ${style}`} >
                            {typeTwo}
                        </div> */}
                    </div>
                    <div className="pokemonPhoto">
                        <img src={image} alt={name} />
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Card;