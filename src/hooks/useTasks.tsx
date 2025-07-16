import useLocalStorage from "use-local-storage"
import { TASKS_KEY, type TaskModel } from "../models/TaskModel";

export default function useTasks(){

    const [tasks] = useLocalStorage<TaskModel[]>(TASKS_KEY, []);

    return {
        tasks,
        tasksCount: tasks.length,
        concludedTasksCount: tasks.filter(task => task.concluded).length,
    }
}