import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between h-20 items-center bg-gray-200 shadow px-5'>
        <div className='w-[10%] flex items-center h-full text-2xl font-bold'>
            <h1 className='text-zinc-800'>LOGO</h1>
        </div>
        <div className='w-[50%] h-full'>
            <ul className='text-zinc-800 font-bold  w-full h-full flex gap-6 list-none items-center '>
                <li className="cursor-pointer">HOME</li>
                <li className="cursor-pointer">ABOUT</li>
                <li className="cursor-pointer">CONTACT</li>
            </ul>
        </div>
    </div>
  ) 
}

export default Navbar