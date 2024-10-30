import React from 'react'

type buttonProps = {
  title: string;
  href: string;
  classname?: string;
}


const Button = ({title,href,classname}: buttonProps)  => {
  return (
    <div className=''>
        <a className={`hover:border border:[#505454] rounded-md p-4 bg-[#505454] text-white`} href={href}>{title}</a>
    </div>
  )
}

export default Button
