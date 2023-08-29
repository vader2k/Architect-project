import { useState } from 'react';
import React from 'react'
import {logo,open,close} from '../assets';
import {navLinks} from '../constants';

const Navigation = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className='w-full py-5 bg-white flex  items-center'>
      <img src={logo} className='sm:w-[80px] w-[65px] 'alt='logo'/>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[13px] ${index === navLinks.length -1 ?'mr-0':'mr-10'} text-black hover:border-t hover:border-b border-black  `}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : open} alt='menu' className='w-[28px] h-[28px] object-contain' onClick={()=>settoggle((prev)=>(!prev))} />

        <div className={`${toggle? 'flex': 'hidden'} absolute bg-white w-[350px] h-[100vh] top-20 z-50 `}>
          <ul className='flex flex-col items-center list-none gap-20 ml-20 m-10 '>
            {navLinks.map((nav,index) =>(
              <li key={nav.id} className='text-[20px] text-black  hover:border-t hover:border-b border-black'>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation