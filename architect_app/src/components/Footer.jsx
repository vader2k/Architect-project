import React from 'react'
import { logo,facebook,twitter,linkedin,pintrest } from '../assets'
import styles from '../style'

const Footer = () => {
  return (
    <section className={`${styles.paddingY} ${styles.boxWidth} flex sm:items-center justify-between flex-wrap sm:flex-row flex-col `}>
        <div className='mb-10'>
          <img className='w-[100px]' src={logo}/>
        </div>

        <div >
          <h1 className='md:text-[1.3rem] text-[1rem] font-thin text-white sm:mt-0 mt-5'>Information</h1>
          <ul className='mt-5 flex flex-col gap-3 text-white text-[0.8rem]'>
            <li>
              Main
            </li>
            <li>
              Gallery
            </li>
            <li>
              Projects
            </li>
            <li>
              Certifications
            </li>
            <li>
              Contacts
            </li>
          </ul>
        </div>

        <div className='mb-10 sm:mt-0 mt-10'>
          <h1  className='md:text-[1.3rem] text-[1rem] font-thin text-white'>Contacts</h1>
          <ul className='mt-5 flex flex-col gap-3 text-white text-[0.8rem]'>
            <li>
              1234 sample street <br/> Austin Texas 78704
            </li>
            <li>
              512-33-2222
            </li>
            <li>
              TheSithLordV@gmail.com
            </li>
          </ul>
        </div>


          <div className='mb-36'>
            <h1 className='md:text-[1.3rem] text-[1rem] font-thin text-white sm:mt-0 mt-5'>Social Media</h1>
            <div className='flex gap-5 mt-5'>
              <img className='w-[20px] cursor-pointer' src={facebook}/>
              <img className='w-[20px] cursor-pointer' src={twitter}/>
              <img className='w-[20px] cursor-pointer' src={linkedin}/>
              <img className='w-[20px] cursor-pointer' src={pintrest}/>
            </div>
          </div>



    </section>
  )
}

export default Footer