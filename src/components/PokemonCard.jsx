import React from "react";

export default function PokemonCard({ name, url }) {
    return (
        <div>
            {/* <img src={img} alt="" /> */}
            <div>
                {/* <p>{number}</p> */}
                <p className="">{name}</p>
                <a href={url}>url</a>
                {/* <p>{type}</p> */}
            </div>
        </div>
    );
}
