import React from 'react'

const Searchbar = () => {
  return (
    <div className='flex items-center bg-[#505454] rounded-full px-4 py-2 w-full max-w-xl shadow-sm mt-5 hover:bg-[#5f6368]'>
        <img src='/search.svg'></img>

        <input className='flex-grow bg-transparent outline-none text-white pl-4'
        type="text" />  

        <div className='flex space-x-3'>
            <img src='/voice.svg' 
            alt='voice'
            className='w-8 h-8'></img>

            <img src='/lens.svg'
            alt='lens'
            className='w-8 h-8'></img>
        </div>
    </div>
  )
}

export default Searchbar
