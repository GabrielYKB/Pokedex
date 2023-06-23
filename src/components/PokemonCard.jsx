import React, { useEffect, useState } from "react";

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

    const { sprites, id } = pokemonData;
    const image = sprites.front_default;

    return (
        <a
            className="bg-white flex flex-col items-center justify-evenly h-52 w-48 rounded-lg border-2 border-gray-400"
            href={`http://localhost:5173/pokemon/${id}`}
        >
            <img src={image} alt={name} className="h-32" />
            <div className="flex gap-1">
                <p>{name.charAt(0).toUpperCase() + name.slice(1)} </p>
                <p className="text-gray-500">#{id}</p>
            </div>
        </a>
    );
}
