import React from 'react'
import styles from '../style'
import { sp1, sp2, sp3 } from '../assets'
const Samples = () => {
  return (
    <div className={`${styles.padding} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <div>
                <p>Sample</p>
                <h1>Project 1</h1>
            </div>
            <div>
                <img src={sp1}/>
            </div>
        </div>
    </div>
  )
}

export default Samples