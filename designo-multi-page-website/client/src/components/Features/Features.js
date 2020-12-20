import React from 'react';
import style from './Features.module.scss';
import AppDesign from '../../assets/home/desktop/image-app-design.jpg';
import GraphicDesign from '../../assets/home/desktop/image-graphic-design.jpg';
import LgWebDesign from '../../assets/home/desktop/image-web-design-large.jpg';
import SmWebDesign from '../../assets/home/desktop/image-web-design-small.jpg';

function Features() {
  return (
    <div className={style.container}>
      <div className={style.webDesign}>
        <img src={LgWebDesign} alt='Web Design' />
        <div className={style.featureText}>
          <h1>WEB DESIGN</h1>
          <p>
            View Projects <span>{'>'}</span>
          </p>
        </div>
      </div>
      <div className={style.appDesign}>
        <img src={AppDesign} alt='App Design' />
        <div className={style.featureText}>
          <h1>APP DESIGN</h1>
          View Projects <span>{'>'}</span>
        </div>
      </div>
      <div className={style.graphicDesign}>
        <img src={GraphicDesign} alt='Graphic Design' />
        <div className={style.featureText}>
          <h1>GRAPHIC DESIGN</h1>
          <p>
          View Projects <span>{'>'}</span>
              </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
