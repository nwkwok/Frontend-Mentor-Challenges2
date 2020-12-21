import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import LetsTalk from '../../components/LetsTalk/LetsTalk';
import DesignCard from '../../components/DesignCard/DesignCard';
import ScrollToTop from '../Utility/ScrollToTop';
import DesignFeatures from '../Features/DesignFeatures';
import GraphicDesign from '../../assets/home/desktop/image-graphic-design.jpg';
import AppDesign from '../../assets/home/desktop/image-app-design.jpg';

const style = {
  base: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

function WebDesign() {
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
      <div style={style.base}>
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
