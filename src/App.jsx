import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className=" mx-5 md:mx-20 mt-5 rounded-xl p-5 bg-slate-700 text-white min-h-[80vh]">
        <div className="addTodo">
          <h1 className='text-lg font-bold'>Add a Todo</h1>
          <input type="text" className='w-80' />
          <button className='bg-slate-200 hover:bg-slate-700 text-black p-2 py-1 text-sm rounded-md mx-4 font-bold'>Submit</button>
        </div>
        <h1 className='text-lg font-bold'>Your Todos</h1>
        <div className="todos">
          <div className="todo flex ">
            <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
            <div className="buttons">
              <button className='bg-slate-200 hover:bg-slate-700 text-black p-2 py-1 text-sm rounded-md mx-1 font-bold'>Edit</button>
              <button className='bg-slate-200 hover:bg-slate-700 text-black p-2 py-1 text-sm rounded-md mx-1 font-bold'>Del</button>
            </div>
          </div> 
        </div>
      </div>
    </>

  )
}

export default App
