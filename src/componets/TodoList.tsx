import Todoitem from "./Todoitem.tsx";
import type {Todo} from "../types/todo.ts";// for double folder i guess it needs 2 dots?


interface TodoListProps {
    todos: Todo[];
    onCompleted:(id:number,completed:boolean) => void;
    onDelete:(id:number) => void;
}
export default  function  TodoList({ todos, onCompleted, onDelete }: TodoListProps) {

    const todosSorted= todos.sort((a,b)=>{
        if(a.completed === b.completed){
            return b.id - a.id;
        }
        return a.completed ? 1 : -1;
    })
    return(
        <>
        <div className ="space-y-2">
            {todosSorted.map((todo) =>(
                <Todoitem
                    key={todo.id}
                    todo={todo}
                    onComplete={onCompleted}
                    onDelete={onDelete}
                />
            ))}
        </div>
            {todos.length === 0 && (
                <p className="text-center text-sm text-red-500">
                    no TODOS YET
                </p>
            ) }
        </>
    );
}