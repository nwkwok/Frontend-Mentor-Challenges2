import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import LetsTalk from '../../components/LetsTalk/LetsTalk'
import DesignCard from '../../components/DesignCard/DesignCard'
import ScrollToTop from '../Utility/ScrollToTop'
import DesignFeatures from '../Features/DesignFeatures'
import GraphicDesign from '../../assets/home/desktop/image-graphic-design.jpg';
import SmWebDesign from '../../assets/home/desktop/image-web-design-small.jpg';

const style = {
    base: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}


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
            <div style={style.base}>
            <DesignFeatures 
                link='/web-design'
                imageSrc={SmWebDesign}
                header='WEB DESIGN'
            />
            <DesignFeatures 
                link='/graphic-design'
                imageSrc={GraphicDesign}
                header='GRAPHIC DESIGN'
            />
            </div>
            <LetsTalk />
        </div>
    )
}

export default AppDesign
