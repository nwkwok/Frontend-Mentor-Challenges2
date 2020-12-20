import React from 'react';
import style from './Hero.module.scss';
import hero from '../../assets/home/desktop/image-hero-phone.png';
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


function Hero() {
  return (
    <div className={style.heroContainer}>
      <div className={style.heroContent}>
        <div className={style.h3Container}>
          <h3>Award-winning custom designs and digital branding solutions</h3>
        </div>
        <p>With over 10 years in the industry, we are experienced in creating fully responsive website, app design, and engaging brand experiences. Find out more about our services.</p>

        <Link to='/about-us'><Button
            buttonContent='LEARN MORE'
            type='light' /></Link>

      </div>
      <div className={style.heroImageContainer}>
        <img src={hero} alt='hero' />
        <div className={style.oval}></div>

      </div>

 
    </div>
  );
}

export default Hero;
