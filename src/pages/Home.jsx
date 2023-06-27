import React, { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { useLoaderData } from "react-router-dom";

export default function Home() {
    const allPokemons = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredPokemons = allPokemons.results.filter((pokemon) => {
        const { name, id } = pokemon;
        const formattedId = String(id).toLowerCase();
        const formattedSearchQuery = searchQuery.toLowerCase();

        return (
            name.includes(formattedSearchQuery) ||
            formattedId.includes(formattedSearchQuery)
        );
    });

    return (
        <div className="bg-black">
            <div className="bg-white container mx-auto px-5">
                <div className="bg-red-800">
                    <form action="">
                        <input
                            className="bg-gray-400"
                            type="text"
                            name=""
                            id=""
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Search Pokemon"
                        />
                    </form>
                </div>
                <div className="">
                    <div className="grid grid-cols-7 gap-5 mt-2 mx-auto justify-items-center ">
                        {filteredPokemons.map((pokemon, index) => (
                            <PokemonCard key={index} {...pokemon} />
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
        throw Error("Failed to fetch Pokemon data");
    }

    return res.json();
};
