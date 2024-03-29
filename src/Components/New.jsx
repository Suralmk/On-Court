import React from 'react'
import { images } from '../Constants'
const New = ({ title, content, image }) => {
  return (
    <div className='w-full  h-auto flex flex-col gap-3 bg-white rounded-lg'>
      <img src={images.image2} alt='' />
      <div className=' p-5 flex flex-col gap-[20px]'>
        <h4 className='font-sans font-bold'>
          {' '}
          NBA Breakout: Rookie Sensation's Epic Triple-Double Rocks the League!"
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
