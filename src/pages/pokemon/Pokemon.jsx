import { useLoaderData, useParams, Link } from "react-router-dom";

export default function Pokemon() {
    const { id } = useParams();
    const pokemon = useLoaderData();

    console.log({ id, pokemon });

    return (
        <div className="">
            <div className="flex gap-2 justify-center text-3xl mb-10 mt-3">
                <h2>{pokemon.name}</h2> <h2 className="text-gray-500">#{id}</h2>
            </div>
            <div className="flex-col flex items-center">
                <div className=" ">
                    <img
                        src={pokemon.sprites.front_default}
                        className="w-96"
                        alt=""
                    />
                    <div className="bg-blue-500 rounded-lg p-4 w-96 h-48 flex flex-col justify-evenly text-white">
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
                <div>Type</div>{" "}
                <p className="bg-orange-500 px-4 rounded-md">Fire</p>
                <div>Weaknesses</div>
                <p className="bg-orange-500 px-4 rounded-md">Fire</p>
                Stats
                <div className="flex gap-2 ">
                    <p>HP</p>
                    <p>Attack</p>
                    <p>Defense</p>
                    <p>Special Attack</p>
                    <p>Special Defense</p>
                    <p>Speed</p>
                </div>
            </div>
            <div>
                <Link to="/pokemon">Back</Link>
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
