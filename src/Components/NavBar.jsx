import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ setShowSearch, showSearch }) => {
  return (
    <div className='w-10/12 p-5 px-8 flex justify-between rounded-lg bg-white opacity-100 items-center mx-auto top-5 left-0 right-0 backdrop-blur-xl absolute z-20'>
      <h2 className='font-orbitron text-3xl w-fit font-bold'>Oncourt</h2>
      <nav className=''>
        <ul className='flex items-center justify-between gap-10 font-orbitron '>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: '#5e27c5', fontWeight: 'bold' } : {}
              }}
              to='/'
              href=''
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: '#5e27c5', fontWeight: 'bold' } : {}
              }}
              to='/news'
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: '#5e27c5', fontWeight: 'bold' } : {}
              }}
              to='/our-team'
            >
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/plays'}
              style={({ isActive }) => {
                return isActive ? { color: '#5e27c5', fontWeight: 'bold' } : {}
              }}
            >
              {' '}
              Plays
            </NavLink>
          </li>
          <li>
            <Link
              onClick={() => {
                setShowSearch(!showSearch)
              }}
            >
              <CiSearch size={30} />
            </Link>
          </li>
          <li>
            <NavLink
              to='/support-us'
              className='ext-white bg-gradient-to-br from-blue-100 to-yellow hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 text-royal-blue'
            >
              Support Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
