import React from 'react'
import ScrollToTop from '../Utility/ScrollToTop'
import LetsTalk from '../LetsTalk/LetsTalk'
import AboutUs from '../AboutUs/AboutUs'
import Talent from '../AboutUs/Talent'
import AllLocations from '../Locations/AllLocations'
import RealDeal from '../AboutUs/RealDeal'

function OurCompany() {
    return (
        <div>
            <ScrollToTop />
            <AboutUs />
            <Talent />
            <AllLocations />
            <RealDeal />
            <LetsTalk />
        </div>
    )
}

export default OurCompany
