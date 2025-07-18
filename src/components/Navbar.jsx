import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white py-3'>
      <div className="logo">
        <span className='font-bold text-xl mx-8'>iTask</span>
      </div>
      <ul className='flex gap-9 mx-8 cursor-pointer' >
        <li className='hover:font-bold cursor-pointer transition-all duration-100'>Home</li>
        <li className='hover:font-bold cursor-pointer '>Your Task</li>
      </ul>
       
        
  ) 
}

export default Navbar