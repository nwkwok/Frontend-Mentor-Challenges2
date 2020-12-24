import React, {useState, useEffect} from 'react';
import PageHeader from '../PageHeader/PageHeader';
import LetsTalk from '../../components/LetsTalk/LetsTalk';
import DesignCard from '../../components/DesignCard/DesignCard';
import ScrollToTop from '../Utility/ScrollToTop';
import DesignFeatures from '../Features/DesignFeatures';
import GraphicDesign from '../../assets/home/desktop/image-graphic-design.jpg';
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

function WebDesign() {
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
        page='web'
        heading='Web Design'
        description='We build websites that serve as powerful marketing tools 
                and bring memorable brand experiences.
                '
      />
      <DesignCard
        name='Test Card'
        description='This is a test description for the card I just made'
        page='web'
      />
      <div style={media}>
        <DesignFeatures
          link='/app-design'
          imageSrc={AppDesign}
          header='APP DESIGN'
        />
        <DesignFeatures
          link='/graphic-design'
          imageSrc={GraphicDesign}
          header='GRAPHIC DESIGN'
        />
      </div>
      <LetsTalk />
    </div>
  );
}

export default WebDesign;
