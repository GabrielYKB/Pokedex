import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav className="bg-gray-400">
                    <div className="nav-links">
                        <NavLink className="nav-link" to="/">
                            Hem
                        </NavLink>
                        <NavLink className="nav-link" to="about">
                            Om oss
                        </NavLink>
                        <NavLink className="nav-link" to="help">
                            Hjälp
                        </NavLink>
                        <NavLink className="nav-link" to="profiles">
                            Profiler
                        </NavLink>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
