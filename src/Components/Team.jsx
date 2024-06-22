import React from 'react'

const Team = ({ team }) => {
  return (
    <div
      className={`${
        team.id % 2 === 1 ? ' justify-start ' : 'justify-end'
      } flex w-full items-center  `}
    >
      <div
        className={`${
          team.id % 2 === 1
            ? ' justify-start bg-yellow/20 '
            : 'justify-start flex-row-reverse bg-purple/20'
        } flex w-1/2  items-center px-[20px] gap-[20px]  `}
      >
        <img
          src={team.picture}
          className='max-w-[300px] rounded-xl object-cover h-[400px]'
        />

        <div className='flex flex-col gap-2 items-start'>
          <h2 className='font-sans font-bold  text-[30px]'>{team.name}</h2>

          <p className='font-sans font-light '>{team.quote}</p>

          <p className='font-sans font-light text-royal-blue/70'>
            {team.position}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team
