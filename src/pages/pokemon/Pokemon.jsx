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
            <div className="flex justify-center gap-6 items-end">
                <img
                    src={pokemon.sprites.front_default}
                    className="w-72"
                    alt=""
                />
                <div className="flex gap-3 bg-cyan-200 rounded-lg p-4 h-24">
                    <div>
                        <h2>Height</h2>
                        <h2>{pokemon.height * 10} CM</h2>
                    </div>
                    <div>
                        <h2>Weight</h2>
                        <h2>{pokemon.weight / 10} KG</h2>
                    </div>
                    <div>
                        <h2>Category</h2>
                        <h2></h2>
                    </div>
                    <div>
                        <h2>Types</h2>
                        <h2>{}</h2>
                    </div>
                    <div>
                        <h2>Gender</h2>
                    </div>
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
