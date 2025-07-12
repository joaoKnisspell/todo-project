import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/page-components";
import PageHome from "./pages/page-home";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<PageHome />} />
				<Route path="/componentes" element={<PageComponents />} />
			</Routes>
		</BrowserRouter>
	);
}
