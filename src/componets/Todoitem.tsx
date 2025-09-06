import type {todo} from "../types/todo";

interface TodoItemProps {
    todo:todo;
    onComplete: (id:number,completed:boolean) => void;
}

export default function TodoItem({todo,onComplete}:TodoItemProps) {
    return (
        <div>
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input type="checkbox"
                       checked={todo.completed}
                       onChange={(e)=> onComplete(todo.id,e.target.checked)}
                       className="scale-125"/>
                <span className={todo.completed ? "opacity-50 cursor-pointer" : "opacity-100"}>
                    {todo.title}
                </span>
            </label>
        </div>
    )
}