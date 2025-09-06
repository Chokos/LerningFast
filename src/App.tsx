import {dummyData} from "./data/todos.ts";
import Todoitem from "./componets/Todoitem.tsx";
import {useState} from "react";
import AddTodoForm from "./componets/AddTodoForm.tsx";


function App() {
    const [todos, setTodos ]= useState(dummyData);

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

    return (
        <main className="py-10 h-screen space-y-5">
          <h2 className = "font-bold text-3xl text-center" > LEARNING</h2>
            <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
                <AddTodoForm
                    onSubmit={addTodo}

                />
                <div className ="space-y-2">
                    {todos.map(todo =>(
                        <Todoitem
                            key={todo.id}
                            todo={todo}
                            onComplete={setCompleted}
                        />
                    ))}
                </div>
            </div>
        </main>
      );
    }

    export default App;
