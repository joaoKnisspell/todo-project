import { CheckSquareIcon, PencilSimpleIcon, SquareIcon, TrashIcon, XSquareIcon } from "@phosphor-icons/react";
import Card from "../components/card";
import Text from "../components/text";
import React from "react";
import InputText from "../components/input-text";
import { TaskStatus, type TaskModel } from "../models/TaskModel";

interface TaskItemProps {
    task: TaskModel;
}

export default function TaskItem({ task }: TaskItemProps) {
    const [isEditing, setIsEditing] = React.useState(task?.state === TaskStatus.Creating);
    const [taskTitle, setTaskTitle] = React.useState("");

    function handleEditTask() {
        setIsEditing(true);
    }

    function handleExitEditingTask() {
        setIsEditing(false);
    }

    function handleTaskChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value);
    }

    function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(taskTitle)
    }

    return(
        <Card size="md" >
            {!isEditing ? (
                <div className="flex items-center gap-3">
                    <SquareIcon size={20} />
                    <Text className="flex-1">{task?.title}</Text>
                    <div className="flex items-center gap-2">
                        <button className="cursor-pointer"><TrashIcon size={16} /></button>
                        <button onClick={handleEditTask}><PencilSimpleIcon size={16} /></button>
                    </div>
                </div>
            ) : 
            <>
                <form className="flex items-center gap-3" onSubmit={(e) => handleSaveTask(e)}>
                    <InputText onChange={(e) => handleTaskChange(e)} className="flex-1" autoFocus required />
                    <div className="flex items-center gap-1">
                        <button type="button" onClick={handleExitEditingTask}><XSquareIcon size={16} /></button>
                        <button type="submit"><CheckSquareIcon size={16} /></button>
                    </div>
                </form>
            </>}
        </Card>
    )
}