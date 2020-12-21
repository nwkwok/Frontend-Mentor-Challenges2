import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import LetsTalk from '../../components/LetsTalk/LetsTalk'
import DesignCard from '../../components/DesignCard/DesignCard'

function GraphicDesign() {
    return (
        <div>
            <PageHeader 
                page='graphic'
                heading='Graphic Design'
                description='We deliver eye-catching branding materials that are 
                tailored to meet your business objectives.
                '/>
            <DesignCard 
                page='graphic' 
                />
            <LetsTalk />
        </div>
    )
}

export default GraphicDesign