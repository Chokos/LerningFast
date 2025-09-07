import {dummyData} from "./data/todos.ts";
import {useState} from "react";
import AddTodoForm from "./componets/AddTodoForm.tsx";
import TodoList from "./componets/TodoList.tsx";
import type { Todo } from "./types/todo";
import TodoSummary from "./componets/TodoSummary.tsx";


function App() {
    const [todos, setTodos ]= useState<Todo[]>(dummyData);

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

    return (
        <main className="py-10 h-screen space-y-5 overflow-y-auto">
          <h2 className = "font-bold text-3xl text-center" > LEARNING</h2>
            <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
                <AddTodoForm onSubmit={addTodo}/>
                <TodoList todos={todos} onCompleted={setCompleted}  onDelete={deleteTodo}/>
            </div>
            <TodoSummary todos={todos} deleteAllcompleted={deleteAllcompletedTodos}/>
        </main>
      );
    }

    export default App;// have an error message here i can not find wtf it is need to do a research on monday
