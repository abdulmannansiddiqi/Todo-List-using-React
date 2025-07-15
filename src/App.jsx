import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-5  rounded-xl p-5    bg-slate-300 min-h-screen ">
        <div className="addTodo">
          <h1 className='text-lg font-bold'>Add a Todo</h1>
          <input type="text" />
          <button>Submit</button>
        </div>
        <h1 className='text-lg font-bold  '>Your Todos</h1>
        <div className="todos">
          <div className="todo flex">
            <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
            <div className="buttons">
              <button>Edit</button>
              <button>Del</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
