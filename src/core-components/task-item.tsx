import { CheckSquareIcon, PencilSimpleIcon, SquareIcon, TrashIcon, XSquareIcon } from "@phosphor-icons/react";
import Card from "../components/card";
import Text from "../components/text";
import React from "react";
import InputText from "../components/input-text";

interface TaskItemProps {
    title: string;
}

export default function TaskItem({ title }: TaskItemProps) {
    const [isEditing, setIsEditing] = React.useState(false);

    function handleEditTask() {
        setIsEditing(true);
    }

    function handleExitEditingTask() {
        setIsEditing(false);
    }

    return(
        <Card size="md" className="flex items-center gap-3">
            {!isEditing ? (
                <>
                    <SquareIcon size={20} />
                    <Text className="flex-1">{title}</Text>
                    <div className="flex items-center gap-2">
                        <button className="cursor-pointer"><TrashIcon size={16} /></button>
                        <button onClick={handleEditTask}><PencilSimpleIcon size={16} /></button>
                    </div>
                </>
            ) : 
            <>
                <InputText className="flex-1" />
                <div className="flex items-center gap-1">
                    <button onClick={handleExitEditingTask}><XSquareIcon size={16} /></button>
                    <button><CheckSquareIcon size={16} /></button>
                </div>
            </>}
        </Card>
    )
}