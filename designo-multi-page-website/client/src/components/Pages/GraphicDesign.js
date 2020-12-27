import React, {useState, useEffect} from 'react';
import PageHeader from '../PageHeader/PageHeader';
import LetsTalk from '../../components/LetsTalk/LetsTalk';
import DesignCard from '../../components/DesignCard/DesignCard';
import ScrollToTop from '../Utility/ScrollToTop';
import DesignFeatures from '../Features/DesignFeatures';
import SmWebDesign from '../../assets/home/desktop/image-web-design-small.jpg';
import AppDesign from '../../assets/home/desktop/image-app-design.jpg';

const style = {
  desktop: {
      display: 'flex',
      justifyContent: 'space-between'
  },
  tablet: {
      display: 'flex',
      flexDirection: 'column',
  },
  mobile: {
      display: 'flex',
      flexDirection: 'column',
  }
}

function GraphicDesign() {
    const [isDesktop, setDesktop] = useState()
    const [isTablet, setTablet] = useState()
    const [isMobile, setMobile] = useState()

    const updateMedia = () => {
        if (window.innerWidth > 1111) {
            setDesktop(true)
            setTablet(false)
            setMobile(false)
        } else if (window.innerWidth > 770 && window.innerWidth <= 1111) {
            setDesktop(false)
            setTablet(true)
            setMobile(false)            
        } else if (window.innerWidth > 250 && window.innerWidth <= 770) {
            setDesktop(false)
            setTablet(false)
            setMobile(true)            
        }
    }

    useEffect (() => {
        updateMedia();
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });

    const getMedia = () => {
        if (isDesktop) {
            return style.desktop
        } else if (isTablet) {
            return style.tablet
        } else if (isMobile) {
            return style.mobile
        }
    }

    const media = getMedia()
    console.log(media);

  return (
    <div>
      <ScrollToTop />
      <PageHeader
        page='graphic'
        heading='Graphic Design'
        description='We deliver eye-catching branding materials that are tailored to meet your business objectives.'
      />
      <DesignCard page='graphic' />
      <div style={media}>
        <DesignFeatures
          link='/web-design'
          imageSrc={SmWebDesign}
          header='WEB DESIGN'
        />
        <DesignFeatures
          link='/app-design'
          imageSrc={AppDesign}
          header='APP DESIGN'
        />
      </div>
      <LetsTalk />
    </div>
  );
}

export default GraphicDesign;
