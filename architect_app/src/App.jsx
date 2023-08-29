import React from 'react'
import styles from './style';
import { Navigation,Hero,About,Mission,Sample,Contacts,Footer} from './components'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navigation/>
        </div>
      </div>

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

      <div className={`${styles.paddingX} ${styles.flexCenter} btn`} >
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>
    </div>
  )
};

export default App