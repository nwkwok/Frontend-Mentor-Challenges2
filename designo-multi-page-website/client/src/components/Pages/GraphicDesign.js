import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import LetsTalk from '../../components/LetsTalk/LetsTalk';
import DesignCard from '../../components/DesignCard/DesignCard';
import ScrollToTop from '../Utility/ScrollToTop';
import DesignFeatures from '../Features/DesignFeatures';
import SmWebDesign from '../../assets/home/desktop/image-web-design-small.jpg';
import AppDesign from '../../assets/home/desktop/image-app-design.jpg';

const style = {
  base: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

function GraphicDesign() {
  return (
    <div>
      <ScrollToTop />
      <PageHeader
        page='graphic'
        heading='Graphic Design'
        description='We deliver eye-catching branding materials that are 
                tailored to meet your business objectives.
                '
      />
      <DesignCard page='graphic' />
      <div style={style.base}>
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
