import React from 'react'
import Vedio from '../Components/Vedio'
import { data } from '../Constants'
const Plays = () => {
  React.useEffect(() => {
    document.title = 'Plays | On Court'
  }, [])
  return (
    <div className='px-[20px] py-[120px] md:p-[120px]  bg-bg1 min-h-screen w-full '>
      <div className='max-w-[1350px] flex-col gap-8 flex items-start mx-auto'>
        <h3 className='capitalize font-orbitron text-royal-blue text-3xl mt-[20px] font-light'>
          Plays
        </h3>
        <div className='container w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
          {data.Vedio.map((ved, id) => (
            <Vedio vedioId={ved.videoId} title={ved.title} key={id} />
          ))}
        </div>
        Best plays in the seasonal games rematch
        {/* <div>
          {data.Vedio.map((ved, id) => (
            <Vedio vedioId={ved.videoId} title={ved.title} key={id} />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Plays
