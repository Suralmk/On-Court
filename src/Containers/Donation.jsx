import React, { useState } from 'react'

const DonationAmount = ({ amount, setDonationAmount }) => {
  return (
    <div
      onClick={() => {
        setDonationAmount(amount)
      }}
      className='w-max bg-white p-4 rounded border-b-3 border-red-500  bg-gradient-to-br from-red-300 to-yellow font-bold text-[18px] cursor-pointer'
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
  const [donationAmount, setDonationAmount] = useState(null)
  const handleDonation = e => {
    e.preventDefault()
    console.log('Donation')
  }
  return (
    <div className='pt-[100px] bg-bg1 flex justify-center items-center min-h-screen flex-col'>
      <form
        className='w-[500px] flex flex-col gap-5'
        onSubmit={e => handleDonation(e)}
      >
        <div className='flex flex-col gap-2'>
          Full Name
          <input
            type='text'
            placeholder='Full Name'
            className='p-2  px-4 rounded outline-none'
          />
        </div>
        <div className='flex flex-col gap-2'>
          Email
          <input
            type='email'
            placeholder='Emial'
            className='py-2  px-4 rounded outline-none '
          />
        </div>
        <h1 className='font-orbitron text-[30px] mb-7'>
          How much would you like to donate?
        </h1>
        <div className='flex gap-5 w-full justify-center'>
          {amount.map((am, id) => (
            <DonationAmount
              amount={am.amount}
              key={id}
              setDonationAmount={setDonationAmount}
            />
          ))}
        </div>
        {/* <div className='flex flex-col gap-2'>
          <h1>Choose Amount</h1>
          <select name='' id='' className='p-2 rounded  outline-none'>
            <option value=''>Select Amount of money</option>
            <option value=''>50 Birr</option>
            <option value=''>100 Birr</option>
            <option value=''>200 Birr</option>
            <option value=''>500 Birr</option>
            <option value=''>1000 Birr</option>
          </select>
        </div> */}
        <div className='flex flex-col gap-2'>
          or other amount
          <input
            type='number'
            placeholder='other amount'
            className='py-2 px-4 rounded outline-none'
            value={donationAmount}
            onChange={e => setDonationAmount(e.target.value)}
          />
        </div>
        <button className=' mt-5 ext-white bg-gradient-to-br from-blue-100 to-yellow hover:bg-gradient-to-bl font-bold rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 text-royal-blue '>
          Continue
        </button>
      </form>
    </div>
  )
}

export default Donation
