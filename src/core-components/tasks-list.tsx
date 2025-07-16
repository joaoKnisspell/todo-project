import Button from "../components/button";
import useTask from "../hooks/useTask";
import useTasks from "../hooks/useTasks";
import { TaskStatus } from "../models/TaskModel";
import TaskItem from "./task-item";

export default function TasksList() {
    const { tasks } = useTasks();
    const { prepareTask } = useTask();

    function handlePrepareTask(){
        prepareTask();
    }

    return(
        <>
            <section>
                <Button onClick={handlePrepareTask} className="w-full" disabled={tasks.some((task) => task.state === TaskStatus.Creating)}>Nova Tarefa</Button>
            </section>
            <section className="space-y-2">
                {tasks?.map((task) => <TaskItem key={task?.id} task={task} />)}
            </section>
        </>
    )
}