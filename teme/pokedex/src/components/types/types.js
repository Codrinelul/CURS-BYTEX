import React from "react";
import "./types.css";

const Types = ({ type }) => {

    const style = type + " card";

    return (
        <div className="pokemonTypesContainer">
            {/* {type.map((type) => (
                <div>
                    <div className={`pokemonType ${style}`} >
                        {type.name}
                    </div>
                </div>
            )} */}
            <div className={`pokemonType ${style}`} >
                {type}
            </div>
            <div className="pokemonType" >
                ceva
            </div>
        </div>
    );
};

export default Types;