import {dummyData} from "./data/todos.ts";


function App() {
  return (
    <main className="learningfast">
      <h2 className = "font-bold text-3xl text-center" > LEARNING</h2>

        <div className="max-w-lg mx-auto">
            <div className ="space-y-2">
                {dummyData.map(todo =>(
                    <p key={todo.id} className="text-lg">
                        {todo.title}
                    </p>
                ))}

            </div>
        </div>
    </main>
  )
}

export default App
