import React, { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import { useLoaderData } from "react-router-dom";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [allPokemons, setAllPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(
                    "https://pokeapi.co/api/v2/pokemon?limit=1010"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch Pokemon data");
                }
                const data = await response.json();
                setAllPokemons(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPokemonData();
    }, []);

    useEffect(() => {
        const formattedSearchQuery = searchQuery.toLowerCase();
        const filteredResults = allPokemons.filter((pokemon) => {
            const { name, id } = pokemon;
            const formattedName = name.toLowerCase();
            const formattedId = String(id).padStart(3, "0");
            return (
                formattedName.includes(formattedSearchQuery) ||
                formattedId.includes(formattedSearchQuery)
            );
        });
        setFilteredPokemons(filteredResults.slice(0, 70));
    }, [searchQuery, allPokemons]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

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
                    <div className="grid grid-cols-7 gap-5 mt-2 mx-auto justify-items-center">
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
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    if (!res.ok) {
        throw Error("Failed to fetch Pokemon data");
    }

    return res.json();
};
