import { NavLink, Outlet } from "react-router";
import Header from "../core-components/header";
import MainContent from "../core-components/main-content";

export default function LayoutMain() {
    return(
        <div className="mt-20">
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <footer className="flex gap-2 items-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/componentes">Componentes</NavLink>
            </footer>
        </div>
    )
}