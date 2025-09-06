import {dummyData} from "./data/todos.ts";
import {useState} from "react";
import AddTodoForm from "./componets/AddTodoForm.tsx";
import TodoList from "./componets/TodoList.tsx";
import type { Todo } from "./types/todo";


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
                id: prevTodos.length+1, title,completed:false
            },
            ...prevTodos //if i want to add the item after i have to put all the setTodos after prevTodos
        ])
    }
    function deleteTodo(id:number){
        setTodos((prevTodos)=>prevTodos.filter(todo=>todo.id !== id));
    }


    return (
        <main className="py-10 h-screen space-y-5 overflow-y-auto">
          <h2 className = "font-bold text-3xl text-center" > LEARNING</h2>
            <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
                <AddTodoForm onSubmit={addTodo}/>
                <TodoList todos={todos} onCompleted={setCompleted}  onDelete={deleteTodo}/>
            </div>
        </main>
      );
    }

    export default App;// have an error message here i can not find wtf it is need to do a research on monday
