import React from 'react';
import style from './Footer.module.scss';
import LightLogo from '../../assets/shared/desktop/logo-light.png';
import Facebook from '../../assets/shared/desktop/icon-facebook.svg';
import YouTube from '../../assets/shared/desktop/icon-youtube.svg';
import Twitter from '../../assets/shared/desktop/icon-twitter.svg';
import Pinterest from '../../assets/shared/desktop/icon-pinterest.svg';
import Instagram from '../../assets/shared/desktop/icon-instagram.svg';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerContentTop}>
        <div className={style.logoContainer}>
          <Link to='/'><img src={LightLogo} alt='logo' /></Link>
        </div>
        <div className={style.navContainer}>
          <ul className={style.navLinks}>
            <li><Link to='/our-company'>OUR COMPANY</Link></li>
            <li><Link to='/locations'>LOCATIONS</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
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
            <Link to=''><img src={Facebook} alt='social-media-icon-facebook' /></Link>
            <Link to=''><img src={YouTube} alt='social-media-icon-youtube' /></Link>
            <Link to=''><img src={Twitter} alt='social-media-icon-twitter' /></Link>
            <Link to=''><img src={Pinterest} alt='social-media-icon-pinterest' /></Link>
            <Link to=''><img src={Instagram} alt='social-media-icon-instagram' /></Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
