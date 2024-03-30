import React from 'react'

const New = ({title, image}) => {
  return (
    <div className='w-full  h-auto flex flex-col gap-3 bg-white rounded-lg'>
      <div>
        <img src={image} alt="" />
      </div>
      <div className=' p-5 flex flex-col gap-[20px]'>
        <h4 className='font-sans font-bold'>
          {' '}
         {title}
        </h4>
        <p className='font-anek'>
          Breaking NBA News: Rookie sensation shatters records with jaw-dropping
          triple-double performance, leaving fans in awe!
        </p>
      </div>
    </div>
  )
}

export default New
