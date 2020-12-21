import React from 'react'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import AboutUs from '../AboutUs/AboutUs'
import LetsTalk from '../LetsTalk/LetsTalk'
import ScrollToTop from '../Utility/ScrollToTop'


function Home() {
    return (
        <div>
            <ScrollToTop />
            <Hero />
            <Features />
            <AboutUs />
            <LetsTalk />
        </div>
    )
}

export default Home
