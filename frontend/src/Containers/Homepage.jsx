import React, { useEffect, useRef } from 'react'
import { images, data } from '../Constants'
import { FaQuoteLeft } from 'react-icons/fa'
import New from '../Components/New'
import gsap from 'gsap'
import Vedio from '../Components/Vedio'
import { Link } from 'react-router-dom'
import { PiArrowRightLight } from 'react-icons/pi'

const Homepage = () => {
  const firstText = useRef(null)

  useEffect(() => {
    document.title = 'Home | On Court'

    // Kobe's Animation
    const textElement = firstText.current

    const textWidth = textElement.clientWidth
    const duration = textWidth / 200

    const tl = gsap.timeline({ repeat: -1 })

    tl.set(textElement, { x: '100%' })

    tl.to(textElement, {
      x: `-${textWidth}`,
      duration,
      ease: 'linear'
    })

    tl.to(textElement, {
      x: 0,
      duration: 0,
      ease: 'none'
    })

    tl.play()

    return () => {
      tl.kill()
    }
  }, [firstText.current])

  //   }
  return (
    <>
      <div className='w-full relative justify-center '>
        <div className='w-full h-[1000px] md:h-[1400px] bg-black z-20'>
          <img
            className='w-full h-full object-cover opacity-90'
            src={images.layup}
            alt=''
          />
        </div>
        <div className='absolute top-[250px] left-1/2  transform -translate-x-1/2 flex flex-col items-end gap-10 w-full max-w-[1200px] '>
          <h1 className='w-[95%] md:w-full mx-auto text-start font-sans text-3xl md:text-5xl text-white'>
            Checkout What is hapenning
            <span className='font-orbitron block my-8 md:my-3 text-[70px] sm:text-[100px] md:text-[200px] lg:text-[240px] font-bold text-white'>
              On Court
            </span>{' '}
            and outside!
          </h1>
          <div
            className=' w-[090%] mx-auto md:m-0 sm:w-[350px] md:w-[400px] h-[300px]  p-10 mt-20 md:mt-60 flex bg-white2 justify-center items-center
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

      <div className='h-auto w-full bg-white2 relative overflow-hidden'>
        <div className='bg-royal-blue opacity-10 w-[600px] h-[600px] absolute -top-[100px] -left-[200px]       rounded-full'></div>
        <div className='flex flex-col container relative h-auto px-[20px] py-[50px] md:p-[100px]  mx-auto  max-w-[1440px] md:flex-row justify-center gap-[100px] items-center overflow-y-hidden overflow-x-visible'>
          <div className='w-full md:w-1/2 flex flex-col gap-5 relative'>
            <h3 className='font-orbitron text-royal-blue text-3xl '>
              On Court, History is Made
            </h3>
            <p className='font-anek text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              nesciunt vero sint unde cupiditate Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Commodi nesciunt vero sint unde
              cupiditate voluptat cumque? Fugit omnis aliquam veniam. voluptates
              excepturi, illo, error fugit quos, veritatis reprehenderit ad
              debitis deserunt cumque? Fugit omnis aliquam veniam.
            </p>
            <p className='text-black/60 font-anek'>On the road</p>
          </div>
          <div className='relative w-full md:w-5/12 flex items-end justify-end'>
            <img
              src={images.dunk1}
              className='w-[400px] absolute h-auto z-10'
              alt=''
            />
            <div className='w-[250px] h-[450px] bg-yellow rounded-full opacity-80 top-0'></div>
          </div>
        </div>
      </div>

      <div className='w-full bg-bg1 '>
        <div className='  max-w-[1440px] h-auto px-[20px] py-[50px] md:p-[100px] flex gap-[20px] flex-col mx-auto'>
          <h3 className=' capitalize font-orbitron text-royal-blue text-3xl'>
            Recent News
          </h3>
          <p>NBA has announced some new informations</p>
          <div className=' container w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
            {data.News.map((news, id) => {
              if (id >= 9) return null
              return (
                <New
                  key={id}
                  title={news.title}
                  image={news.image}
                  summary={news.summary}
                  id={news.id}
                />
              )
            })}
          </div>
          <Link
            to='/news'
            className='p-2 border-royal-blue border w-max rounded flex items-center gap-5'
          >
            Read More <PiArrowRightLight />
          </Link>
        </div>
      </div>

      {/* All time stars */}
      <div className=' relative h-auto overflow-hidden flex justify-center gap-[100px] items-center '>
        <img
          className=' w-full h-[100vh] bg-black object-contain object-bottom'
          src={images.kobe}
          alt=''
        />
        <div className='absolute bottom-5 '>
          <p
            ref={firstText}
            className='relative m-0 text-white font-anek text-[100px] md:text-[200px] lg:text-[250px] whitespace-nowrap overflow-hidden'
          >
            All Time Legend - Kobe Bryant Mamba
          </p>
        </div>
      </div>

      {/* vines Collection */}
      <div className='w-full bg-bg1 '>
        <div className='max-w-[1440px] h-auto px-[20px] py-[50px] md:p-[100px] flex gap-[20px] flex-col mx-auto'>
          <h3 className='font-orbitron text-royal-blue text-3xl capitalize'>
            Best plays and Funny Vedios
          </h3>
          <p>NBA has announced some new informations</p>
          <div className=' container w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
            {data.Vedio.map((ved, id) => (
              <Vedio vedioId={ved.videoId} title={ved.title} key={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
