import type {Todo} from "../types/todo";
import {Trash2} from "lucide-react"

interface TodoItemProps {
    todo:Todo;
    onComplete: (id:number,completed:boolean) => void;
    onDelete:(id:number) => void;
}

export default function TodoItem({todo,onComplete,onDelete}:TodoItemProps) {
    return (
        <div className="flex items-center gap-1">
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
                <input type="checkbox"
                       checked={todo.completed}
                       onChange={(e)=> onComplete(todo.id,e.target.checked)}
                       className="scale-125"/>
                <span className={todo.completed ? "opacity-50 cursor-pointer" : "opacity-100"}>
                    {todo.title}
                </span>
            </label>
            <button className="p-2" onClick={()=>onDelete(todo.id)}>
                <Trash2 size={20} className ="text-gray-500"/>
            </button>
        </div>
    )
}