import React from 'react'
import { leftLinks, rightLinks } from '@/data'

const Footer = () => {
  return (
    <>
    <div className='bg-[#171717] '>
        <p className=' p-2 pl-10 text-white border-b border-b-white '>Philippines</p>
        <div className='px-10 pt-2 items-center lg:grid grid-cols-2 md:flex place-content-evenly sm:grid grid-rows-2 flex flex-wrap'>
            <div className='flex space-x-10  text-white'>
               {
                leftLinks.map((link) =>(
                  <a className='hover:underline'href={link.link}>{link.name}</a>
               ))}
            </div>
            <div className='flex space-x-10 justify-end text-white '> 
              {
                rightLinks.map((link) =>(
                  <p className='hover:underline'>{link.name}</p>
                  
               ))}
            </div>
        </div>

    </div>
     
    </>
  )
}

export default Footer
