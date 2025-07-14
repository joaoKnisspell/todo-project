import Button from "../components/button";
import TaskItem from "./task-item";

export default function TasksList() {
    return(
        <>
            <section>
                <Button className="w-full">Nova Tarefa</Button>
            </section>
            <section className="space-y-2">
                <TaskItem title="Fazer compras da semana" />
                <TaskItem title="Fazer compras da semana" />
                <TaskItem title="Fazer compras da semana" />
                <TaskItem title="Fazer compras da semana" />
            </section>
        </>
    )
}