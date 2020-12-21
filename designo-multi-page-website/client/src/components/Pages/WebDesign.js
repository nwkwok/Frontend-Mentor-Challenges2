import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import LetsTalk from '../../components/LetsTalk/LetsTalk'
import DesignCard from '../../components/DesignCard/DesignCard'

function WebDesign() {
    return (
        <div>
            <PageHeader 
                page='web'
                heading='Web Design'
                description='We build websites that serve as powerful marketing tools 
                and bring memorable brand experiences.
                '/>
            <DesignCard 
                name='Test Card'
                description='This is a test description for the card I just made'
                page='web' 
                />
            <LetsTalk />
        </div>
    )
}

export default WebDesign
