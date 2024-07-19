import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-start px-8 py-2 border-slate-400 border-b-2'>
    <div>
       <img src="logo.png" alt="logo" className=' w-20 h-20'/>
       </div>
       <div>
      <h1
        className=" text-white sm:text-4xl text-3xl font-semibold"
      >
        Currency Convertor
      </h1>
      </div>
    </div>
  )
}
