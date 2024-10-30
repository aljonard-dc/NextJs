import React from 'react'

const Header = () => {
  return (
    <div className='pt-5 pr-5 flex justify-end items-center space-x-5   text-white'>
      
        <p className='text-sm hover:underline'>Gmail</p>
        <p className='text-sm hover:underline '>Images</p>
     
      <img src='/gridmenu.svg' 
            alt='voice'
            className='w-8 h-8'></img>

            <img src='/profile.svg'
            alt='lens'
            className='w-8 h-8'></img>
    </div>
  )
}

export default Header
