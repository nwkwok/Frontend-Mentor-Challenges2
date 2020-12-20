import React from 'react';
import style from './Hero.module.scss';
import hero from '../../assets/home/desktop/image-hero-phone.png';
import Button from '../Button/Button'

function Hero() {
  return (
    <div className={style.heroContainer}>
      <div className={style.heroContent}>
        <h3>Award-winning custom designs and digital branding solutions</h3>
        <p>With over 10 years in the industry, we are experienced in creating fully responsive website, app design, and engaging brand experiences. Find out more about our services.</p>

        <Button
            buttonContent='Learn More'/>

      </div>
      <div className={style.heroImageContainer}>
        <div className={style.oval}></div>
        <img src={hero} alt='hero' />

      </div>

 
    </div>
  );
}

export default Hero;
