import React from 'react';
import style from './Features.module.scss';
import AppDesign from '../../assets/home/desktop/image-app-design.jpg';
import GraphicDesign from '../../assets/home/desktop/image-graphic-design.jpg';
import LgWebDesign from '../../assets/home/desktop/image-web-design-large.jpg';
import { Link } from 'react-router-dom';

function Features() {
  return (
    <div className={style.container}>
      <div className={style.containerLeft}>
        <div className={style.webDesignContainer}>
          <div className={style.webDesign}>
            <Link to='/web-design'>
              <div className={style.scrim}>
                <img src={LgWebDesign} alt='Web Design' />
                <div className={style.featureText}>
                  <h1>WEB DESIGN</h1>
                  <p>
                    View Projects <span>{'>'}</span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.containerRight}>
        <div className={style.appDesignContainer}>
          <div className={style.appDesign}>
            <Link to='/app-design'>
              <div className={style.scrim}>
                <img src={AppDesign} alt='App Design' />
                <div className={style.featureText}>
                  <h1>APP DESIGN</h1>
                  View Projects <span>{'>'}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className={style.graphicDesignContainer}>
          <div className={style.graphicDesign}>
            <Link to='/graphic-design'>
              <div className={style.scrim}>
                <img src={GraphicDesign} alt='Graphic Design' />
                <div className={style.featureText}>
                  <h1>GRAPHIC DESIGN</h1>
                  <p>
                    View Projects <span>{'>'}</span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
