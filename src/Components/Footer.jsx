import React, { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleSubscription = async e => {
    e.preventDefault()

    if (validateSub() === false) {
      return
    } else {
      console.log('subscribed')
    }
  }
  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateSub = () => {
    let failEmail = !email || !validateEmail(email)

    if (failEmail) {
      setEmailError('Email is required!')
    } else {
      setEmailError('')
    }

    if (failEmail) {
      return false
    }
  }

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
          <form onSubmit={e => handleSubscription(e)} className='flex'>
            <div className='flex flex-col gap-2 items-start'>
              <input
                style={
                  emailError
                    ? {
                        borderColor: 'rgba(255, 0, 0, 0.753)',
                        borderRight: 'none'
                      }
                    : {}
                }
                type='email'
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
                className='px-5 py-1.5 border-royal-blue/30 bg-white border-[1px] outline-none text-[15px] border-r-white rounded-lg rounded-r-none  text-royal-blue '
              />
              <p className='text-[14px] text-red-500'>
                {' '}
                {emailError ? emailError : ''}
              </p>
            </div>
            <button
              type='submit'
              className='h-max bg-gradient-to-br from-blue-100 to-yellow hover:bg-gradient-to-bl font-medium  rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 text-royal-blue rounded-l-none text-[15px]'
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className='flex flex-col gap-3 w-1/4 items-start'>
          <h1 className='text-2xl font-orbitron  items-start'>News</h1>
          <p>Ethiopian Basketball Federation</p>
          <p>Announcements</p>
          <p>Trainings</p>
          <p>Join our Team</p>
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
