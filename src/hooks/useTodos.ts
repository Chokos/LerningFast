import {useEffect, useState} from "react";
import type {Todo} from "../types/todo.ts";
import {dummyData} from "../data/todos.ts";

interface UseTodosRetrun{
    todos:Todo[]; // very important so the  useTodos know what it returns*
    setCompleted: (id: number, completed: boolean) => void;
    addTodo: (title: string) => void;
    deleteTodo: (id: number) => void;
    deleteAllcompletedTodos: () => void;
}

export default function useTodos(): UseTodosRetrun {
    const [todos, setTodos ]= useState<Todo[]>(()=>{
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos")||"[]")
        return savedTodos.length >0 ? savedTodos : dummyData;//introducing local storage and fallback if nothing is found.
    });

    useEffect(() => {// this is a hook can only be called inside component.
        localStorage.setItem("todos", JSON.stringify(todos));

    },[todos])

    function setCompleted(id:number,completed:boolean){
        setTodos((prevTodos)=>
            prevTodos.map(todo =>
                (todo.id === id ? {...todo,completed }:todo)) // returns a completly new array!!
        );
    }

    function addTodo(title:string){
        setTodos((prevTodos) => [
            {
                id: Date.now(), title,completed:false // i do not have to worry for wrong deletion if i am working on proper database but the Date.now() is a temporary solution
            },
            ...prevTodos //if i want to add the item after i have to put all the setTodos after prevTodos
        ])
    }
    function deleteTodo(id:number){
        setTodos((prevTodos)=>prevTodos.filter(todo=>todo.id !== id));
    }

    function deleteAllcompletedTodos(){
        setTodos((prevTodos)=>prevTodos.filter(todo=> !todo.completed));
    }

    return {
        todos,
        setCompleted,
        addTodo,
        deleteTodo,
        deleteAllcompletedTodos,


    }

}