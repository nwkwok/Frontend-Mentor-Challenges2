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
    // const [isDesktop, setDesktop] = useState(window.innerWidth > 1111)
    // const [isTablet, setTablet] = useState(window.innerWidth > 770 && window.innerWidth <= 1111)
    // const [isMobile, setMobile] = useState(window.innerWidth > 250 && window.innerWidth <= 770)

    // const updateMedia = () => {
        
    // }

    // useEffect (() => {
    //     window.addEventListener('resize', updateMedia);
    //     return () => window.removeEventListener('resize', updateMedia);
    // });


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
