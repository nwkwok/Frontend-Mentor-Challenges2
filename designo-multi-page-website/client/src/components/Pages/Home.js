import React from 'react'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import Characteristics from '../Characteristics/Characteristics'
import LetsTalk from '../LetsTalk/LetsTalk'
import ScrollToTop from '../Utility/ScrollToTop'


function Home() {
    return (
        <div>
            <ScrollToTop />
            <Hero />
            <Features />
            <Characteristics />
            <LetsTalk />
        </div>
    )
}

export default Home
