import React from 'react'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import Characteristics from '../Characteristics/Characteristics'
import LetsTalk from '../LetsTalk/LetsTalk'
import ScrollToTop from '../Utility/ScrollToTop'
import style from './Home.module.scss'


function Home() {
    return (
        <div>
            <ScrollToTop />
            <Hero />
            <div className={style.ovalLeftContainer}>
            </div>
            <Features />
            <Characteristics />
            <div className={style.ovalRightContainer}>
            </div>
            <LetsTalk />
        </div>
    )
}

export default Home
