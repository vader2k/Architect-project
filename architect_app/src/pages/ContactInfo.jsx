import React from 'react'
import styles from '../style'
import {location,white} from '../assets'

const ContactInfo = () => {
  return (
    <div className={`${styles.paddingY} ${styles.flexCenter}`}>
      <div className=' flex sm:flex-row flex-col justify-between items-center gap-20 sm:ml-20 ml-0'>
        <div>
          <h1 className='md:text-[3.5rem] text-[2rem] font-thin text-gray-500  hero-header-holder'>
              Contact
            </h1>
            <p className='md:text-[5rem] text-[2.5rem] font-bold text-black  hero-header-holder'>
              Information
            </p>

            <p className='my-10 font-bold'>Company Name</p>
            <p>1234 Sample Street Austin Texas 78704</p>
            <p className='my-20 font-bold'>512-33-2222</p>
            <p className='my-5'>TheSithLordV@gmail.com</p>
            <button className='btn text-white text-[0.8rem] w-[200px]  py-4 border border-transparent hover:border-black transition duration-300 ease-in-out hover:bg-white hover:text-black flex items-center justify-center my-10 '>CONTACT US</button>     
          
        </div>
          
        <div>
          <img className='lg:ml-[35rem] ml-8' src={location}/>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo