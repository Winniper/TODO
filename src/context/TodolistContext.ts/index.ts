import { createContext } from "react";

export interface todoList {
    id : number;
    task: string;
    isCompleted: boolean
}

export const TodoListContext = createContext<todoList | undefined>(undefined)
