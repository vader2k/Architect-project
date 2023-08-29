import React from 'react'
import { form,white } from '../assets'

const Contacts = () => {
  return (
    <div className='my-16 pb-36 relative'>
        <h1 className='md:text-[3rem] text-[2.5rem] font-thin text-gray-500 p-5 '>
          Contact US
        </h1>
      <div className = 'flex md:flex-row flex-col items-center justify-between  gap-5 '>
        <form className='flex flex-col gap-3'>
          <input className='ab p-3 sm:w-[650px] w-[350px] text-[0.8rem] outline-none' type="text" placeholder='Name'></input>
          <input className='ab p-3 text-[0.8rem] outline-none' type="number" placeholder='Phone Number'></input>
          <input className='ab p-3 text-[0.8rem] outline-none' type="email" placeholder='E-mail' />
          <input className='ab p-3 text-[0.8rem] outline-none' type="text" placeholder='Interested in' />
          <textarea className='ab px-3 pt-3 h-[150px] text-[0.8rem] outline-none' placeholder='Message'></textarea>
        </form>
        <div>
          <img src={form}/>
      </div>
      </div>

      <button className='btn text-white text-[0.8rem] absolute bottom-0 left-0 w-[200px]  py-4 border border-transparent hover:border-black transition duration-300 ease-in-out hover:bg-white hover:text-black flex items-center justify-center gap-5 '>SEND EMAIL <img className='w-[20px]' src={white}/></button>     
    </div>
  )
}

export default Contacts