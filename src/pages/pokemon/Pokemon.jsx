import { useLoaderData, useParams, Link } from "react-router-dom";

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

export default function Pokemon() {
    const { id } = useParams();
    const pokemon = useLoaderData();

    console.log({ id, pokemon });

    return (
        <div className="">
            <div className="flex gap-2 justify-center text-3xl mb-10 mt-3">
                <h2>{pokemon.name}</h2> <h2 className="text-gray-500">#{id}</h2>
            </div>
            <div className="flex-col flex items-center ">
                <div className="flex flex-col items-center">
                    <img
                        src={pokemon.sprites.front_default}
                        className="w-96"
                        alt=""
                    />
                    <div className="bg-blue-500 rounded-lg p-4 w-80 h-48 flex flex-col justify-evenly text-white ">
                        <div className="flex gap-5">
                            <div className="mb-2">
                                <span className="font-bold">Height: </span>
                                {pokemon.height * 10} CM
                            </div>
                            <div className="mb-2">
                                <span className="font-bold">Weight: </span>
                                {pokemon.weight / 10} KG
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="mb-2">
                                <span className="font-bold">Category: </span>
                            </div>
                            <div>
                                <span className="font-bold">Abilities: </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p>Type:</p>
                    <div className="gap-2 flex">
                        {pokemon.types.map((type) => (
                            <p
                                key={type.slot}
                                className={`px-4 rounded-md ${
                                    typeColors[type.type.name]
                                }`}
                            >
                                {type.type.name}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="stats-table">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left">Stat</th>
                                <th className="text-right">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemon.stats.map((stat) => (
                                <tr key={stat.stat.name}>
                                    <td className="text-left">
                                        {stat.stat.name}
                                    </td>
                                    <td className="text-right">
                                        {stat.base_stat}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-green-500 flex justify-between p-4">
                {id > 1 && (
                    <Link to={`/pokemon/${parseInt(id, 10) - 1}`}>
                        Previous
                    </Link>
                )}
                <Link to={`/pokemon/${parseInt(id, 10) + 1}`}>Next</Link>
            </div>
        </div>
    );
}

// data loader
export const pokemonLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) {
        throw Error("Det gick inte att hämta profilerna");
    }

    return res.json();
};
