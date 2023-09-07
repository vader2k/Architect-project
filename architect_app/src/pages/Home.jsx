import React, {useRef} from 'react'
import { useIntersection } from 'react-use'
import { gsap } from 'gsap'
import styles from '../style'
import { Hero,About,Mission,Sample,Contacts} from '../components'



const Home = () => {
    const sectionAbout = useRef(null);
    const intersection = useIntersection(sectionAbout , {
        root: null,
        rootMargin: '100px',
        threshold: 0.5,
    });


    const fadeIn = element => {
        gsap.to(element, 1, {
            opacity:1,
            y:-60,
            ease: 'power4.out',
            stagger:{
                amount:.3,
            }
        })
    };

    const fadeOut = element => {
        gsap.to(element, 1, {
            opacity:0,
            y:-20,
            ease: 'power4.out'
        })
    };

    intersection && intersection.intersectionRatio < 0.5 ?
    fadeOut('.fadeOut') : fadeIn('.fadeIn');





    const sectionSample = useRef(null);
    const intersect = useIntersection(sectionSample, {
        root: null,
        rootMargin: '100px',
        threshold: 0.5,
    });

    const fadesIn = item => {
        gsap.to(item, 1, {
            opacity: 1,
            y: -60,
            ease: 'power4.out',
            stagger: {
                amount: .3,
            }
        })
    }
    const fadesOut = item => {
        gsap.to(item, 1, {
            opacity: 0,
            y: -20,
            ease: 'power4.out',
        })
    }
 
    intersect && intersect.intersectionRatio < 0.5 ?
    fadesOut('.fadesOut') : fadesIn('.fadesIn');


  return (
    <>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <Hero/>
            </div>

            <div ref={sectionAbout} className={`${styles.paddingX} ${styles.flexCenter} ab my-10 fadeIn fadeOut`}>
                <About/>
            </div>

            <div  className={`${styles.paddingX} ${styles.flexCenter} `}>
            <div className={`${styles.boxWidth}`}>
                <Mission/>
            </div>
            </div>

            <div ref={sectionSample} className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth} fadesIn fadesOut`}>
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