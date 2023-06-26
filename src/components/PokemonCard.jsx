import React, { useEffect, useState } from "react";

// Mapping of type names to colors
const typeColors = {
    normal: "bg-gray-300",
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-400",
    ice: "bg-blue-200",
    fighting: "bg-red-700",
    poison: "bg-purple-500",
    ground: "bg-yellow-800",
    flying: "bg-indigo-400",
    psychic: "bg-pink-400",
    bug: "bg-green-600",
    rock: "bg-gray-700",
    ghost: "bg-purple-700",
    dragon: "bg-indigo-700",
    dark: "bg-gray-800",
    steel: "bg-gray-500",
    fairy: "bg-pink-200",
};

export default function PokemonCard({ name, url }) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`Failed to fetch details for ${name}`);
                }
                const data = await res.json();
                setPokemonData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPokemonData();
    }, [name, url]);

    if (!pokemonData) {
        return <div>Loading...</div>;
    }

    const { sprites, id, types } = pokemonData;
    const image = sprites.front_default;

    return (
        <a
            className="pokemon-card bg-blue-200 flex flex-col hover:animate-bounce-once items-center rounded-lg border-2 border-gray-400"
            href={`http://localhost:5173/pokemon/${id}`}
        >
            <img src={image} alt={name} className="h-48" />
            <div className="flex gap-1">
                <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                <p className="text-gray-500">#{id}</p>
            </div>
            <div className="flex flex-wrap justify-center">
                {types.map((type) => (
                    <span
                        key={type.slot}
                        className={`px-2 py-1 mt-2 text-sm font-medium rounded-md ${
                            typeColors[type.type.name]
                        }`}
                    >
                        {type.type.name}
                    </span>
                ))}
            </div>
        </a>
    );
}
