import React from 'react'
import { headerimg,left, right } from '../assets'

const Hero = () => {
  return (
    <div className='md:flex block items-center gap-48 justify-center my-5'>
      <div className='my-5'>
        <h1 className='md:text-[4rem] text-[3rem] font-thin text-gray-500'>
          PROJECT
        </h1>
        <p className='md:text-[6rem] text-[4rem] font-bold text-black'>
          JERICHO
        </p>

        <div className='flex items-center my-20 gap-10'>
            <img className='w-[30px] arrows cursor-pointer' src={left}/>
            <img className='w-[30px] arrows cursor-pointer' src={right}/>
        </div>

        <div className='flex gap-20 items-center my-10 text-[1.2rem] font-semibold text-gray-500'>
          <div>
            <div>
              0
            </div>
            <div>
              1
            </div>
          </div>
          <div>
            /
          </div>
          <div>
            02
          </div>
        </div>
      </div>

      <div className='relative'>
        <img src={headerimg}/>
        <button type='button' className='absolute bottom-0 bg-white h-[60px] w-[230px] text-[0.9rem] flex items-center justify-center gap-10 '>VIEW PROJECT <img className='w-[25px]' src={right}/></button>
      </div>
    </div>
  )
}

export default Hero