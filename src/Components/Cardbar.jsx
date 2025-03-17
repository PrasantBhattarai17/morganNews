import React from 'react'

const Cardbar = () => {
  return (
    <div className='w-full h-[3rem]'>
        <ul className='flex py-4  gap-6 px-5 text-sm font-sans'>
            <li className='bg-black text-white p-2 rounded-lg'>For You</li>
            <li className=' text-white p-2 rounded-lg'>Business</li>
            <li className=' text-white p-2 rounded-lg'>Sports</li>
            <li className=' text-white p-2 rounded-lg'>Politics</li>
        </ul>
            </div>
  )
}

export default Cardbar