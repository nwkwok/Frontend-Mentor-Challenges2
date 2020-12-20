import React from 'react';
import style from './PageHeader.module.scss';
// import WebDesignBg from '../../assets/web-design/desktop/bg-pattern-intro-web.svg'
// import AppDesignBg from '../../assets/app-design/desktop/bg-pattern-intro-app.svg'
// import GraphicDesignBg from '../../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg'

function PageHeader(props) {
  const getImageSrc = () => {
    if (props.page === 'web') {
      return style.web;
    } else if (props.page === 'app') {
      return style.app;
    } else if (props.page === 'graphic') {
      return style.graphic;
    }
  };
  const imageSrc = getImageSrc();

  return (
    <div className={`${style.container} ${imageSrc}`}>
      <div className={style.contentContainer}>
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default PageHeader;
