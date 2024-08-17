import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { images } from '../Constants'
import { PiWarning } from 'react-icons/pi'
const DonationAmount = ({ amount, setDonationAmount }) => {
  return (
    <div
      onClick={() => {
        setDonationAmount(prev => ({
          ...prev,
          amount: `${amount}`
        }))
      }}
      className='w-max bg p-4 rounded border-b-3 border-red-500  bg-gradient-to-br from-red-300 to-yellow font-light text-[18px] cursor-pointer'
    >
      {amount} Birr
    </div>
  )
}
const Donation = () => {
  const amount = [
    {
      id: 0,
      amount: 100
    },
    {
      id: 1,
      amount: 200
    },
    {
      id: 2,
      amount: 500
    },
    {
      id: 3,
      amount: 1000
    }
  ]

  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    amount: ''
  })
  const [loading, setLoading] = useState(false)
  const [amountError, setAmountError] = useState('')
  const [emailError, setEmaiError] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [donationError, setDonationError] = useState('')

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleDonation = async e => {
    e.preventDefault()
    if (validateDonation() === false) {
      return
    } else {
      setLoading(true)
      try {
        const res = await axios
          .post('https://oncourt-backend.vercel.app/initialize/', data)
          .then(res => {
            window.location.replace(res.data.checkout_url)
          })
        console.log(res)
      } catch (err) {
        console.log(err)
        setDonationError('There happnes to be a problem!')
      }
      setLoading(false)
    }
  }

  const validateDonation = () => {
    const failEmail = !data.email || data.email.length === 0
    if (failEmail) {
      setEmaiError('Email is required!')
    } else {
      setEmaiError('')
    }

    const failFirstName = !data.first_name || data.first_name.length === 0
    if (failFirstName) {
      setFirstNameError('First name is required!')
    } else {
      setFirstNameError('')
    }

    const failLastName = !data.last_name || data.last_name.length === 0
    if (failLastName) {
      setLastNameError('Last name is required!')
    } else {
      setLastNameError('')
    }

    let failAmount = !data.amount
    if (failAmount) {
      setAmountError('Amount is required!')
    } else if (data.amount < 50) {
      setAmountError('Minimum anount is 50 Birr!')
      failAmount = true
    } else {
      setAmountError('')
    }

    if (failFirstName || failEmail || failFirstName || failAmount) {
      return false
    }
  }

  useEffect(() => {
    document.title = 'Support Us | On Court'
  }, [])
  return (
    <>
      {loading ? (
        <div className='w-full h-screen fixed z-20 bg-black/20 flex items-center justify-center'>
          <img src={images.spinner} alt='' width={200} />
        </div>
      ) : (
        <> </>
      )}

      <div className='pt-[140px] pb-[20px] bg-bg1 flex justify-start items-center min-h-screen flex-col'>
        {donationError ? (
          <p className='w-[600px] p-3 text-center bg-red-200 text-red-600 mb-3 flex justify-center items-center gap-4'>
            {' '}
            <PiWarning size={25} />
            {donationError}
          </p>
        ) : (
          ''
        )}
        <form
          className='w-[600px] flex flex-col gap-5 bg-white/70 p-8 rounded-lg'
          onSubmit={e => handleDonation(e)}
        >
          <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-2'>
              First Name
              <input
                style={
                  firstNameError
                    ? { borderColor: 'rgba(255, 0, 0, 0.753)' }
                    : { borderColor: 'rgba(53, 50, 50, 0.553)' }
                }
                type='text'
                name='first_name'
                placeholder='First Name'
                className='p-2  px-4 rounded outline-none border-[1px] bg-transparent '
                onChange={e => handleChange(e)}
              />
              {firstNameError ? (
                <p className='text-red-400 text-[13px]'>{firstNameError}</p>
              ) : (
                ''
              )}
            </div>
            <div className='flex flex-col gap-2'>
              Last Name
              <input
                style={
                  lastNameError
                    ? { borderColor: 'rgba(255, 0, 0, 0.753)' }
                    : { borderColor: 'rgba(53, 50, 50, 0.553)' }
                }
                type='text'
                name='last_name'
                placeholder='Last Name'
                className='p-2  px-4 rounded outline-none border-[1px] bg-transparent'
                onChange={e => handleChange(e)}
              />
              {lastNameError ? (
                <p className='text-red-400 text-[13px]'>{lastNameError}</p>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            Email
            <input
              style={
                emailError
                  ? { borderColor: 'rgba(255, 0, 0, 0.753)' }
                  : { borderColor: 'rgba(53, 50, 50, 0.553)' }
              }
              type='email'
              name='email'
              placeholder='Email'
              className='py-2  px-4 rounded outline-none border-[1px] bg-transparent '
              onChange={e => handleChange(e)}
            />
            {emailError ? (
              <p className='text-red-400 text-[13px]'>{emailError}</p>
            ) : (
              ''
            )}
          </div>
          <h1 className='font-orbitron text-[30px] mb-7'>
            How much would you like to donate?
          </h1>
          <div className='flex gap-5 w-full justify-center'>
            {amount.map((am, id) => (
              <DonationAmount
                amount={am.amount}
                key={id}
                setDonationAmount={setData}
              />
            ))}
          </div>

          <div className='flex flex-col gap-2'>
            or other amount
            <input
              style={
                amountError
                  ? { borderColor: 'rgba(255, 0, 0, 0.753)' }
                  : { borderColor: 'rgba(53, 50, 50, 0.553)' }
              }
              type='number'
              name='amount'
              placeholder='Other Amount'
              className='py-2 px-4 rounded outline-none border-[1px] bg-transparent'
              value={data.amount}
              onChange={e => handleChange(e)}
            />
            {amountError ? (
              <p className='text-red-400 text-[13px]'>{amountError}</p>
            ) : (
              ''
            )}
          </div>
          <button className=' mt-5 ext-white bg-gradient-to-br from-blue-100 to-yellow hover:bg-gradient-to-bl font-bold rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 text-royal-blue '>
            Continue
          </button>
        </form>
      </div>
    </>
  )
}

export default Donation
