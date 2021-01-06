import React, {useEffect, useRef} from 'react';
import { displayIntro } from '../Animate/Animate'
import style from './Hero.module.scss';
import hero from '../../assets/home/desktop/image-hero-phone.png';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Hero() {

  let intro = useRef(null)

  useEffect(() => {
      displayIntro(intro)
  }, [])

  return (
    <div className={style.heroContainer} ref={(el) => (intro=el)}>
      <div className={style.heroContent}>
        <div className={style.h3Container}>
          <h3>Award-winning custom designs and digital branding solutions</h3>
        </div>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive website, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <div className={style.button}>
          <Link to='/our-company'>
            <Button buttonContent='LEARN MORE' btn='light' />
          </Link>
        </div>
      </div>
      <div className={style.heroImageContainer}>
        <img src={hero} alt='hero' />
        <div className={style.oval}></div>
      </div>
    </div>
  );
}

export default Hero;
