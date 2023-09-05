import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'
import styles from './style';
import { Navigation,Footer, Sample} from './components'
import {Home, Gallery, Projects, Certifications, ContactInfo, NotFound, Samples } from './pages'



const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <BrowserRouter>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navigation/>
          </div>
        </div>

        <Routes>
          <Route index element={<Home/>} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="certifications" element={<Certifications/>} />
          <Route path="Contactinfo" element={<ContactInfo/>} />
          <Route path="samples" element={<Samples/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>

        <div className={`${styles.paddingX} ${styles.flexCenter} btn`} >
          <div className={`${styles.boxWidth}`}>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App