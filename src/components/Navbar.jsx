import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-start px-8 py-4 border-slate-400 border-b-2'>
    <div>
       <img src="logo.png" alt="logo" className=' sm:w-12 sm:h-12 w-10 h-10'/>
       </div>
       <div>
      <h1
        className=" text-white sm:text-4xl text-xl font-semibold ml-2"
      >
        Currency Convertor
      </h1>
      </div>
    </div>
  )
}
