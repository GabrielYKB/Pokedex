import React from "react";
import PokemonCard from "../components/PokemonCard";
import { useLoaderData } from "react-router-dom";

export default function Home() {
    const pokemons = useLoaderData();
    console.log(pokemons);
    return (
        <div className="bg-black">
            <div className="bg-white container mx-auto">
                <div className="bg-red-800">
                    <form action="">
                        <input
                            className="bg-gray-400"
                            type="text"
                            name=""
                            id=""
                        />
                    </form>
                </div>
                <div className="">
                    <div className="grid grid-cols-7 gap-5 mt-2 mx-auto justify-items-center ">
                        {pokemons.results.map((d, i) => (
                            <PokemonCard key={i} {...d} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export const getFirst20Pokemon = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=70");
    if (!res.ok) {
        throw Error("Det gick inte att hämta profilerna");
    }

    return res.json();
};
