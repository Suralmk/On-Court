import React, { useEffect, useRef } from 'react'
import { images, data } from '../Constants'
import { FaQuoteLeft } from 'react-icons/fa'
import New from '../Components/New'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Vedio from '../Components/Vedio'
const Homepage = () => {

  const firstText = useRef(null)
  const secondText = useRef(null)
  const slider = useRef(null)
  let xPercent = 0
  let direction = -1

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => (direction = e.direction * -0.7)
      },
      x: '-500px'
    })
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    } else if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate)
    xPercent += 0.1 * direction
  }
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


      <div className='h-auto w-full bg-white2 relative overflow-hidden'>
      <div className='bg-royal-blue opacity-10 w-[600px] h-[600px] absolute -top-[100px] -left-[200px]       rounded-full'></div>
      <div className=' container relative h-auto  p-[100px]  mx-auto  max-w-[1440px] flex justify-center gap-[100px] items-center  overflow-y-hidden overflow-x-visible'>

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
      </div>

      <div className='w-full bg-bg1 '>
        <div className='  max-w-[1440px] h-auto p-[100px] flex gap-[20px] flex-col mx-auto'>
          <h3 className=' capitalize font-orbitron text-royal-blue text-3xl'>
            Recent News
          </h3>
          <p>NBA has announced some new informations</p>
          <div className=' container w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {data.News.map((news, id) => (
              <New key={id} title={news.title} image={news.image}/>
            ))}
            
          </div>
        </div>
      </div>

      {/* All time stars */}
      <div className=' relative h-auto overflow-hidden flex justify-center gap-[100px] items-center '>
        <img
          className=' w-full h-[100vh] bg-black object-contain object-bottom'
          src={images.kobe}
          alt=''
        />
        <div className='absolute bottom-5  w-full'>
          <div ref={slider} className='relative whitespace-nowrap flex'>
            <p
              ref={firstText}
              className='relative m-0 text-white font-anek text-[250px]'
            >
              Kobe Bryant Mamba - 
            </p>
            <p
              ref={secondText}
              className='absolute left-full m-0 text-white font-anek text-[250px] '
            >
              All Time Legend
            </p>
          </div>
        </div>
      </div>

      {/* vines Collection */}
      <div className='w-full bg-bg1 '>
        <div className='max-w-[1440px] h-auto p-[100px] flex gap-[20px] flex-col mx-auto'>
          <h3 className='font-orbitron text-royal-blue text-3xl capitalize'>
            Best plays and Funny Vedios
          </h3>
          <p>NBA has announced some new informations</p>
          <div className=' container w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4'>
            {data.Vedio.map((ved, id) => (
                <Vedio vedioId={ved.videoId} title={ved.title} />
            ))}
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
