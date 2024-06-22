import React from 'react'

const Footer = () => {
  return (
    <div className='h-auto w-full bg-white relative overflow-hidden'>
      <div className='bg-yellow opacity-50 w-[600px] h-[600px] absolute -top-[100px] -left-[200px]       rounded-full z-[-1]'></div>
      <div className='container max-w-[1440px] p-[100px] flex justify-between items-top gap-10 mx-auto '>
        <div className='flex flex-col gap-8 w-1/3 mr-10'>
          <h1 className='text-5xl font-orbitron font-bold items-start'>
            On Court
          </h1>
          <p>
            We have ennjoyed basketball and all the blessing and joy that comes
            together with it. Come join us.
          </p>
          <input
            type='email'
            placeholder='Email'
            className='p-3 border-royal-blue bg-ehite border-[1px] rounded-lg outline-none'
          />
        </div>

        <div className='flex flex-col gap-3 w-1/4 items-start'>
          <h1 className='text-2xl font-orbitron  items-start'>News</h1>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
          <p>NBA</p>
        </div>

        <div className='flex flex-col gap-3 w-1/4 items-start'>
          <h1 className='text-2xl font-orbitron  items-start'>Plays</h1>
          <p>NBA best plays</p>
          <p>Slam Dunk</p>
          <p>Dribbles</p>
        </div>
      </div>
      <div className='bg-purple opacity-50 w-[600px] h-[600px] absolute bottom-[-300px] right-[-400px]       rounded-full'></div>
    </div>
  )
}

export default Footer
