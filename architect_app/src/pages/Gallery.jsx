import React from 'react'
import styles from '../style'
import {left, right, gallery1, gallery2, gallery3, gallery4,gallery5, gallery10, gallery6, gallery7, gallery8, gallery9} from '../assets'
const Gallery = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className='md:px-40 px-0 py-10 '>
          <h1 className='md:text-[3.5rem] text-[2.5rem] font-thin text-gray-500'>
            Photo
          </h1>
          <p className='md:text-[5rem] text-[3.5rem] font-bold text-black'>
            Gallery
          </p>

          <div className='flex sm:py-30 py-16 flex-wrap place-items-start sm:justify-center gap-8 sm:px-0 sm:mx-[0px] mx-[65px]'>
              <img src={gallery1}/>
              <img src={gallery2}/>
              <img src={gallery3}/>
              <img src={gallery4}/>
              <img src={gallery5}/>
              <img src={gallery6}/>
              <img src={gallery7}/>
              <img src={gallery8}/>
              <img src={gallery9}/>
              <img src={gallery10}/>
          </div>

          <div className='flex sm:gap-20 gap-16 px-5 sm:px-0'>
          <div className='flex gap-5 sm:gap-10 items-center my-10 text-[1.2rem] font-semibold text-gray-500'>
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
              01
            </div>
          </div>

          <div className='flex items-center my-20 gap-10'>
              <img className='w-[30px] arrows cursor-pointer' src={left}/>
              <img className='w-[30px] arrows cursor-pointer' src={right}/>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Gallery