import React from 'react'
import styles from '../style'
import { Hero,About,Mission,Sample,Contacts} from '../components'


const Home = () => {
  return (
    <>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <Hero/>
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenter} ab my-10`}>
                <About/>
            </div>

            <div  className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Mission/>
            </div>
            </div>

            <div  className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Sample/>
            </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Contacts/>
            </div>
            </div>
    </>
  )
}

export default Home