import React from 'react'
import { images } from '../Constants'
import { FaQuoteLeft } from 'react-icons/fa'
import New from '../Components/New'
const Homepage = () => {
  return (
    <>
      <div className='relative justify-center '>
        <img
          className='w-full h-[1400px] object-cover z-20 '
          src={images.layup}
          alt=''
        />
        <div className='absolute top-[250px] left-1/2  transform -translate-x-1/2 flex flex-col items-end gap-10 w-full max-w-[1200px] '>
          <h1 className='font-sans text-5xl text-white'>
            Checkout What is hapenning{' '}
            <span className='font-orbitron block my-3 text-[240px] font-bold text-white'>
              On Court
            </span>{' '}
            and outside !
          </h1>
          <div
            className='w-[400px] h-[300px]  p-10 mt-80 flex bg-white2 justify-center items-center
         backdrop-blur-[7px]'
          >
            <h6 className='text-white font-anek text-[30px] leading-[40px]'>
              <FaQuoteLeft className='text-3xl text-white mb-5' />
              New league rules mandate players to dunk with their non-dominant
              hand for extra points! 🏀🚀
            </h6>
          </div>
        </div>
      </div>

      <div className=' container relative h-auto bg-white2 p-[100px]  mx-auto  max-w-[1440px] flex justify-center gap-[100px] items-center overflow-hidden '>
        <div className='bg-royal-blue opacity-10 w-[600px] h-[600px] absolute -top-[100px] -left-[200px]       rounded-full'>
          sadfdsf
        </div>
        <div className='w-1/2 flex flex-col gap-5 relative'>
          <h3 className='font-orbitron text-royal-blue text-3xl '>
            On Court, History is Made
          </h3>
          <p className='font-anek text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            nesciunt vero sint unde cupiditate voluptates excepturi, illo, error
            fugit quos, veritatis reprehenderit ad debitis deserunt cumque?
            Fugit omnis aliquam veniam.
          </p>
          <p className='text-black'>On the road</p>
        </div>
        <div className='relative w-5/12 flex items-end justify-end'>
          <img
            src={images.dunk1}
            className='w-[400px] absolute h-auto z-10'
            alt=''
          />
          <div className='w-[250px] h-[450px] bg-yellow rounded-full opacity-80 top-0'></div>
        </div>
      </div>

      <div className='w-full bg-bg1 '>
        <div className='  max-w-[1440px] h-auto p-[100px] flex gap-[20px] flex-col mx-auto'>
          <h3 className='font-orbitron text-royal-blue text-3xl'>
            Recent News
          </h3>
          <p>NBA has announced some new informations</p>
          <div className=' w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          <New />
          <New />
          <New />
          <New />
          <New />
          <New />
          <New />
          <New />
          <New />
          </div>
       
        </div>
      </div>
    </>
  )
}

export default Homepage