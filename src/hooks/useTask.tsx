import useLocalStorage from "use-local-storage"
import { TASKS_KEY, TaskStatus, type TaskModel } from "../models/TaskModel"

export default function useTask() {
    const [tasks, setTasks] = useLocalStorage<TaskModel[]>(TASKS_KEY, [])

    function prepareTask() {
        setTasks([...tasks, {
            id: Math.random().toString(36).substring(2, 9),
            title: "",
            concluded: false,
            state: TaskStatus.Creating,
        }])
    }

    return {
        prepareTask,
    }
}