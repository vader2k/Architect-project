import React from 'react'
import { about1, about2, about3,right } from '../assets'
import styles from '../style'
import { about } from '../constants'

const About = () => {
  return (
    <div className={` ${styles.boxWidth} items-center justify-center gap-10 flex md:flex-row flex-col-reverse py-5 `}>
      <div className='flex flex-row lg:flex-col gap-5 lg:gap-5 sm:gap-10 about-image  '>
        <img className='md:w-[350px]' src={about1}/>
        <img className='md:w-[350px]' src={about2}/>
      </div>

      <div className='flex justify-center items-center gap-10 flex-col-reverse sm:flex-row'>
        <img className='' src={about3}/>
        <div className='flex flex-col text-justify'>
          <h1  className='md:text-[4rem] text-[3rem] font-thin text-gray-500 p-5'>
            About
          </h1>
          {about.map((text,index)=>(
            <div key={text.id} className='text-[0.9rem] max-w-[600px] p-5'>
              {text.content}
              <button className='flex items-center justify-center gap-6 w-[150px] h-[40px] bg-white mt-3 text-[0.8rem] border hover:border-black hover:border-1 hover:border-solid'>READ MORE <img className='w-[20px]' src={right}/></button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default About