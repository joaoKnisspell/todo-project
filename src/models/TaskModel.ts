export const TASKS_KEY = "tasks"

export const TaskStatus = {
    Creating: "creating",
    Created: "created"
  } as const;
  
  export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

export interface TaskModel {
    id: string;
    title: string;
    concluded: boolean;
    state?: TaskStatus;
}