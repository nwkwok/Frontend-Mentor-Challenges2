import React from 'react';
import style from './PageHeader.module.scss';

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
