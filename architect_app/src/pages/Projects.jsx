import React from 'react'
import styles from '../style'
import {left,right } from '../assets'
import { projects } from '../constants'

const Projects = () => {
  return (
    <div className={`${styles.paddingY} ${styles.flexCenter} md:w-[80%] w-[90%] m-auto `}>
        <div className={`${styles.boxWidth}`}>
          <h1 className='md:text-[3.5rem] text-[2.5rem] font-thin text-gray-500 px-5 hero-header-holder'>
              our
            </h1>
            <p className='md:text-[5rem] text-[3.5rem] font-bold text-black px-5 hero-header-holder'>
              Projects
            </p>

            <div className={`${styles.flexCenter} ${styles.paddingY}`}>
              <div className='flex flex-col'> 
                {
                  projects.map((projects, index)=>{
                    return(
                      <div key={index} className='flex md:flex-row flex-col justify-between md:gap-20  items-center my-10'> 
                      <div>
                         <img src={projects.img}/>
                      </div>
                        <div className='flex flex-col place-items-start md:gap-10 gap-5 p-8 ab'>
                          <div className='md:text-[3rem] text-[2rem] font-thin text-gray-500 '> {projects.title}</div> <br/>
                          <div className='max-w-[600px] sample-texts'>{projects.content} </div>

                          <button className='ab-btn flex items-center justify-center gap-6 w-[150px] h-[40px] bg-white text-[0.8rem] border hover:border-black hover:border-1 hover:border-solid sm:my-10 my-5'>VIEW MORE <img className='w-[20px]' src={right}/></button>
                        </div>

                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div className='flex md:gap-20 gap-10 px-5'>
          <div className='flex gap-10 items-center my-10 text-[1.2rem] font-semibold text-gray-500'>
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
              03
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

export default Projects