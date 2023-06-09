import { Outlet } from "react-router-dom";

export default function PokemonLayout() {
    return (
        <div className="pokemon-layout">
            <h2></h2>
            <Outlet />
        </div>
    );
}
