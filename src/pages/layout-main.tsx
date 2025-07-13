import { Outlet } from "react-router";
import Footer from "../core-components/footer";
import Header from "../core-components/header";
import MainContent from "../core-components/main-content";

export default function LayoutMain() {
	return(
        <div className="mt-20">
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </div>
    )
}
