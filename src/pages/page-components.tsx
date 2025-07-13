import Badge from "../components/badge";
import Button from "../components/button";
import Card from "../components/card";
import Container from "../components/container";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";

export default function PageComponents() {
	return (
		<Container className="flex flex-col gap-2" size="md">
			<Text variant={"body-md-bold"}>Hello World</Text>
			<Text variant={"body-md"}>Hello World</Text>
			<Text variant={"body-sm"}>Hello World</Text>
			<Button>Nova Tarefa</Button>
			<div>
				<Badge variant="secondary">5</Badge>
				<Badge>2 de 5</Badge>
			</div>
			<InputText />
			<Card size="md"></Card>
			<Skeleton rounded="sm" className="h-8" />
			<Skeleton rounded="lg" className="h-6 w-1/2" />
			<div className="flex space-x-1">
				<Skeleton rounded="full" className="h-5 w-5" />
				<Skeleton rounded="full" className="h-5 w-5" />
			</div>
		</Container>
	);
}
