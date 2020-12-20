import React from 'react';
import style from './Hero.module.scss';
import hero from '../../assets/home/desktop/image-hero-phone.png';
import LightButton from '../Button/LightButton'


function Hero() {
  return (
    <div className={style.heroContainer}>
      <div className={style.heroContent}>
        <h3>Award-winning custom designs and digital branding solutions</h3>
        <p>With over 10 years in the industry, we are experienced in creating fully responsive website, app design, and engaging brand experiences. Find out more about our services.</p>

        <LightButton
            buttonContent='LEARN MORE' />

      </div>
      <div className={style.heroImageContainer}>
        <img src={hero} alt='hero' />
        <div className={style.oval}></div>

      </div>

 
    </div>
  );
}

export default Hero;
