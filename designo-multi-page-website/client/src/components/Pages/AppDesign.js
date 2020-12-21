import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import LetsTalk from '../../components/LetsTalk/LetsTalk'
import DesignCard from '../../components/DesignCard/DesignCard'
import ScrollToTop from '../Utility/ScrollToTop'


function AppDesign() {
    return (
        <div>
            <ScrollToTop />
            <PageHeader 
                page='app'
                heading='App Design'
                description='Our mobile designs bring intuitive digital solutions
                to your customers right at their fingertips.
                '/>
            <DesignCard 
                page='app' 
                />
            <LetsTalk />
        </div>
    )
}

export default AppDesign
