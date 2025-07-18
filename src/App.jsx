import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { createLogger } from 'vite'


function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const handleAdd = () => {
    settodos([...todos, { todo, isCompleted: false }])
   
     settodo("")
    console.log(todos)
  }
  const handleChange = (e) => {
    settodos(e.target.value)

  }
  const handleEdit = () => {

  }
  const handleDel = () => {

  }

  return (
    <>
      <Navbar />
      <div className=" mx-5 md:mx-20 mt-5 rounded-xl p-5 bg-slate-700 text-white min-h-[80vh]">
        <div className="addTodo my-5">
          <h1 className='text-lg font-bold'>Add a Todo</h1>
          <input onChange={handleChange} value={todo} type="text" className='w-90' />
          <button onClick={handleAdd} className='bg-slate-200 hover:bg-slate-700 text-black p-2 py-1 text-sm rounded-md mx-4 font-bold'>Submit</button>
        </div>
        <h1 className='text-lg font-bold'>Your Todos</h1>
        <div className="todos">
          {todos.map(item => {

             return <div className="todo flex ">
              <div className={item.isCompleted ? "" : "line-through"}>{item.todo}</div>
              <div className="buttons">
                <button onClick={handleEdit} className='bg-slate-200 hover:bg-slate-700 text-black p-2 py-1 text-sm rounded-md mx-1 font-bold'>Edit</button>
                <button onClick={handleDel} className='bg-slate-200 hover:bg-slate-700 text-black p-2 py-1 text-sm rounded-md mx-1 font-bold'>Del</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>

  )
}

export default App
