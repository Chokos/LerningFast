import {dummyData} from "./data/todos.ts";
import Todoitem from "./componets/Todoitem.tsx";
import {useState} from "react";


function App() {
    const [todos, setTodos ]= useState(dummyData);

    function setCompleted(id:number,completed:boolean){
       setTodos((prevTodos)=>
           prevTodos.map(todo =>
               (todo.id === id ? {...todo,completed }:todo))
       );
    }

    return (
        <main className="py-10 h-screen space-y-5">
          <h2 className = "font-bold text-3xl text-center" > LEARNING</h2>
            <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
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
