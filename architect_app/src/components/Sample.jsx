import React from 'react'
import { project1, project2, project3, project4, project5 } from '../assets'
import styles from '../style'
import { white } from '../assets'
import {Link} from 'react-router-dom'

const Sample = () => {
  return (
    <div  className={` ${styles.paddingY} relative pb-20 `}>
      <h1 className='md:text-[3rem] text-[2.5rem] font-thin text-gray-500 p-5'>Our Projects</h1>

      <div className='flex sm:flex-row flex-col gap-5 items-center justify-center pt-10'>
        <div className='relative sigh'>
          <img className='sample-img' src={project1}/>
          <p className='text-white text-[2rem] absolute top-0 test p-10 '>
            Sample <br/>Project <br/>
            <Link to='/samples' className='text-[0.8rem] flex gap-5 items-center  mt-3'>VIEW MORE <img className='w-[20px]' src={white}/> </Link>
          </p>
        </div>

        <div className='relative sigh'>
          <img className='sample-img'src={project2} alt="" />
          <p className='text-white text-[2rem] absolute top-0 test p-10'>
            Sample <br/>Project <br/>
            <Link to='/samples' className='text-[0.8rem] flex gap-5 items-center mt-3'>VIEW MORE <img className='w-[20px]' src={white}/> </Link>
          </p>
        </div>
      </div>

      <div className='flex sm:flex-row flex-col gap-5 py-5 items-center justify-center'>
        <div  className='relative sigh'>
         <img className='sample-img top'  src={project3} alt="" />
         <p className='text-white text-[1.5rem] absolute top-0 test p-8 '>
            Sample <br/>Project <br/>
            <Link to='/samples' className='text-[0.6rem] flex gap-5 items-center mt-3'>VIEW MORE <img className='w-[15px]' src={white}/> </Link>
          </p>
        </div>

        <div  className='relative sigh'>
          <img className='sample-img'  src={project4} alt="" />
          <p className='text-white text-[2rem] absolute top-0 test p-10'>
            Sample <br/>Project <br/>
            <Link to='/samples' className='text-[0.8rem] flex gap-5 items-center mt-3'>VIEW MORE <img className='w-[20px]' src={white}/> </Link>
          </p>
        </div>
        <div  className='relative sigh'>
          <img className='sample-img bottom'  src={project5} alt=""/>
          <p className='text-white text-[1.5rem] absolute top-0 test p-8'>
            Sample <br/>Project <br/>
            <Link to='/samples' className='text-[0.6rem] flex gap-5 items-center mt-3 my-button'>VIEW MORE <img className='w-[15px]' src={white}/> </Link>
          </p>
        </div>
      </div>
      
      <Link to='/projects' className='btn text-white text-[0.8rem] absolute bottom-0 right-0 w-[200px]  py-4 border border-transparent hover:border-black transition duration-300 ease-in-out hover:bg-white hover:text-black flex items-center justify-center gap-5 '>All PROJECTS <img className='w-[20px]' src={white}/></Link>
    </div>
  )
}

export default Sample