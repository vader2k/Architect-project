import React from 'react'
import { mission, focus } from '../constants'
import styles from '../style'

const Mission = () => {
  return (
    <div className={`${styles.paddingY}`}>
      <h1 className='md:text-[3.5rem] text-[2.5rem] font-thin text-gray-500 py-5 xl:max-w-[1280px] p-5'>Main Focus/Mission Statement</h1>

      <div className='flex sm:flex-row flex-col justify-evenly gap-10 '>
        <div className='flex md:flex-row flex-col gap-5 justify-center items-center p-5'>
          <div className='md:text-[8rem] text-[4rem] font-semibold text-gray-500'>
            1
          </div>
          {mission.map((mission)=>(
              <div key={mission.id} className='max-w-[500px] text-justify'>
                {mission.content}
              </div>
            ))}
        </div>

        <div className='flex md:flex-row flex-col gap-5 justify-center items-center p-5'>
        <div className='md:text-[8rem] text-[4rem] font-semibold text-gray-500'>
            2
          </div>
          {focus.map((focus)=>(
            <div key={focus.id} className='max-w-[500px] text-justify'>
              {focus.content}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Mission