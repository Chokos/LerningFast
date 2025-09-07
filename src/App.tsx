import AddTodoForm from "./componets/AddTodoForm.tsx";
import TodoList from "./componets/TodoList.tsx";
import TodoSummary from "./componets/TodoSummary.tsx";
import useTodos from "./hooks/useTodos.ts";


function App() {
    const{
        todos,
        addTodo,
        setCompleted,
        deleteTodo,
        deleteAllcompletedTodos,

    }= useTodos();

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
