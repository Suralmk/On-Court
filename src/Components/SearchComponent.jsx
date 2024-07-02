import React, { useState } from 'react'
import { PiXLight } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

const SearchComponent = ({ setShowSearch, showSearch }) => {
  const [searched, setSearched] = useState('')

  const navigate = useNavigate()

  const handleSearch = e => {
    e.preventDefault()
    setShowSearch(false)
    navigate(`/search/${searched}`)
  }
  return (
    <div
      className={`${
        !showSearch
          ? 'bg-red-300'
          : 'fixed top-0 h-screen bg-white w-full z-50 flex items-top justify-center pt-[150px] pl-[50px]'
      }`}
    >
      <div className='absolute top-[30px] right-[30px]'>
        <PiXLight
          size={50}
          className='cursor-pointer'
          onClick={() => {
            setShowSearch(!showSearch)
          }}
        />
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <form action='' onSubmit={e => handleSearch(e)}>
          <input
            type='text'
            placeholder='Press "Return" to search'
            className='p-5 text-[40px] rounded outline-none border-b-2 w-3/4'
            onChange={e => {
              setSearched(e.target.value)
            }}
          />
        </form>
      </div>
    </div>
  )
}

export default SearchComponent
