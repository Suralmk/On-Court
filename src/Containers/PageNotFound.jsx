import React from 'react'

const PageNotFound = () => {
  return (
    <div className='pt-[100px] bg-white flex justify-center items-center h-screen flex-col '>
      <div className='p-[40px] bg-slate-100 rounded-xl'>
        <h1 className='text-[120px] text-royal-blue/90 font-bold flex items-baseline'>
          404,{' '}
          <span className='text-[30px] font-extralight text-yellow'>
            {' '}
            Page Not Found!
          </span>{' '}
        </h1>
      </div>
    </div>
  )
}

export default PageNotFound
