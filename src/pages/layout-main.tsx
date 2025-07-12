import { NavLink, Outlet } from "react-router";

export default function LayoutMain() {
    return(
        <>
            <header>
                <h1>Todo List</h1>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="flex gap-2 items-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/componentes">Componentes</NavLink>
            </footer>
        </>
    )
}