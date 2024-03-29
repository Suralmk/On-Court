import React from 'react'

const NavBar = () => {
  return (
    <div className='w-10/12 p-5 px-8 flex justify-between rounded-lg bg-white opacity-100 items-center mx-auto   top-5 left-0 right-0 backdrop-blur-xl absolute z-20'>
      <h2 className='font-orbitron text-3xl w-fit font-bold'>Oncourt</h2>
      <nav className=''>
        <ul className='flex items-center justify-between gap-10 font-orbitron '>
          <li><a className='font-bold' href="">Home</a></li>
          <li><a href="" className="">News</a></li>
          <li><a href="">Teams</a></li>
          <li><a href="">Funny</a></li>
          <li><a href="" className='ext-white bg-gradient-to-br from-blue-100 to-yellow hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 text-royal-blue'>Donate</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
