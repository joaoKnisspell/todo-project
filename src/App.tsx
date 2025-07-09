import Button from "./components/button";
import Text from "./components/text";

export default function App() {

  return (
    <div className="flex flex-col gap-2">
      <Text variant={"body-md-bold"}>Hello World</Text>
      <Text variant={"body-md"}>Hello World</Text>
      <Text variant={"body-sm"}>Hello World</Text>
      <Button>Nova Tarefa</Button>
    </div>
  )
}

