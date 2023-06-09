import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Home, { getFirst20Pokemon } from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import PokemonLayout from "./layout/PokemonLayout";
import Pokemon, { pokemonLoader } from "./pages/pokemon/Pokemon";

import "./index.css";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} loader={getFirst20Pokemon} />
            <Route path="pokemon" element={<PokemonLayout />}>
                <Route
                    path=":id"
                    element={<Pokemon />}
                    loader={pokemonLoader}
                />
            </Route>

            {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
    )
);

export default function App() {
    return (
        <div className="h-screen">
            <RouterProvider router={router} />;
        </div>
    );
}
