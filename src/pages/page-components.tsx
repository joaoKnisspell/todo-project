import { NavLink } from "react-router";
import Badge from "../components/badge";
import Button from "../components/button";
import InputText from "../components/input-text";
import Text from "../components/text";

export default function PageComponents() {
	return (
		<div className="flex flex-col gap-2">
			<Text variant={"body-md-bold"}>Hello World</Text>
			<Text variant={"body-md"}>Hello World</Text>
			<Text variant={"body-sm"}>Hello World</Text>
			<Button>Nova Tarefa</Button>
			<Badge variant="secondary">5</Badge>
			<Badge>2 de 5</Badge>
			<InputText />
			<NavLink to="/">Home</NavLink>
		</div>
	);
}
