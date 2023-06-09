import React from "react";
import PokemonCard from "../components/PokemonCard";
import { useLoaderData } from "react-router-dom";

export default function Home() {
    const pokemons = useLoaderData();
    console.log(pokemons);
    return (
        <div className="container">
            <div className="top-bar">
                <form action="">
                    <input type="text" name="" id="" />
                </form>
                <div>dropdown</div>
            </div>
            <div className="grid">
                {pokemons.results.map((d, i) => (
                    <PokemonCard key={i} {...d} />
                ))}
            </div>
        </div>
    );
}
export const getFirst20Pokemon = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    if (!res.ok) {
        throw Error("Det gick inte att hämta profilerna");
    }

    return res.json();
};
