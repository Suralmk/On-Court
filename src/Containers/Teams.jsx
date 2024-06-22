import React from 'react'
import { images, data } from '../Constants'
import Team from '../Components/Team'

const Teams = () => {
  return (
    <div className=' bg-white flex justify-center items-center min-h-screen flex-col'>
      <img
        className='w-full h-screen object-cover  '
        src={images.layup}
        alt=''
      />

      <div className='px-[50px] py-[100px] w-full'>
        <h3 className='font-orbitron text-royal-blue text-3xl mb-4 '>
          Our Coaches and Directors
        </h3>
        <p className='font-anek text-lg mb-7'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          nesciunt vero sint unde
        </p>
        {data.OurTeam.map((team, id) => (
          <Team key={id} team={team} />
        ))}
      </div>
    </div>
  )
}

export default Teams
