import React from 'react'
import styles from '../style'
import { sp1, sp2, sp3 } from '../assets'
const Samples = () => {
  return (
    <div className={`${styles.padding} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <div className='py-5 pb-10 hero-header-holder'>
                <p className='md:text-[3.5rem] text-[2.5rem] font-thin text-gray-500'>Sample</p>
                <h1 className='md:text-[5rem] text-[3.5rem] font-bold text-black'>Project 1</h1>
            </div>
            <div>
                <img src={sp1}/>
            </div>
            <div className='flex md:flex-row flex-col justify-between gap-5 py-20'>
                <img className='max-w-[400px]' src={sp2}/>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est earum facere vel adipisci laboriosam pariatur asperiores dolores magnam harum itaque quas porro hic, quisquam accusantium iusto nisi? Praesentium rem deserunt nulla sunt dicta dolores omnis, magni enim! Suscipit nostrum debitis sed expedita alias delectus eveniet laborum maxime eligendi! Saepe beatae quia eius totam, labore error, voluptatibus laboriosam facere ab laudantium quasi a dolorum nesciunt voluptates asperiores odio atque optio? Incidunt deleniti quia, minus, quisquam quas molestiae inventore expedita, magnam ipsum fugit at maiores officia velit dolorem quidem veniam alias. Eaque possimus cum doloremque libero magnam cupiditate praesentium quia odit nam expedita, placeat sapiente excepturi ex provident dolores! Quod ratione delectus quidem dolores beatae ullam, deleniti eligendi aliquid enim repellat fugiat, eveniet qui nihil perferendis animi similique deserunt non tempore doloremque impedit optio tenetur consequuntur, amet earum? Molestias quisquam doloribus ipsum est veritatis omnis quod in. Incidunt similique ipsam aliquid veritatis soluta aperiam modi labore voluptatibus doloremque aliquam nesciunt, iure possimus optio veniam itaque magni iusto cumque natus laborum. Error officia perferendis dolorem, laborum neque aut repellat nulla eligendi inventore aperiam ab voluptates magni deserunt ex maiores distinctio illo temporibus. Corrupti, accusamus provident et perferendis beatae in odit repellat architecto quaerat.
                </p>
            </div>
            <div>
              <img src={sp3}/>
            </div>
        </div>
    </div>
  )
}

export default Samples