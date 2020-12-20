import React from 'react';
import style from './Footer.module.scss';
import LightLogo from '../../assets/shared/desktop/logo-light.png';
import Facebook from '../../assets/shared/desktop/icon-facebook.svg';
import YouTube from '../../assets/shared/desktop/icon-youtube.svg';
import Twitter from '../../assets/shared/desktop/icon-twitter.svg';
import Pinterest from '../../assets/shared/desktop/icon-pinterest.svg';
import Instagram from '../../assets/shared/desktop/icon-instagram.svg';

function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerContentTop}>
        <div className={style.logoContainer}>
          <img src={LightLogo} alt='logo' />
        </div>
        <div className={style.navContainer}>
          <ul className={style.navLinks}>
            <li>OUR COMPANY</li>
            <li>LOCATION</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
      <div className={style.line} />
      <div className={style.footerContentBottom}>
        <div className={style.address}>
          <p>
            <span>Designo Central Office</span> <br />
            3886 Wellington Street <br />
            Toronot, Ontario M9C 3J5
          </p>
        </div>
        <div className={style.contact}>
          <p>
            Contact Us (Central Office)
            <br />
            P: +1 253-863-8967
            <br />
            M: contact@designo.co
          </p>
        </div>
        <div className={style.socialMedia}>
            <img src={Facebook} alt='social-media-icon-facebook' />
            <img src={YouTube} alt='social-media-icon-youtube' />
            <img src={Twitter} alt='social-media-icon-twitter' />
            <img src={Pinterest} alt='social-media-icon-pinterest' />
            <img src={Instagram} alt='social-media-icon-instagram' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
