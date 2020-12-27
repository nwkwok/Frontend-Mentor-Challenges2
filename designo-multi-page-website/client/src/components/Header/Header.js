import React, { useState, useEffect } from 'react';
import DarkLogo from '../../assets/shared/desktop/logo-dark.png';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import hamburger from '../../assets/shared/mobile/icon-hamburger.svg';
import close from '../../assets/shared/mobile/icon-close.svg';

function Header() {
  const [isMobile, setMobile] = useState(window.innerWidth < 770);
  const [isOpen, setIsOpen] = useState(false);

  const updateMedia = () => {
    if (window.innerWidth < 770) {
      setMobile(true);
    } else if (window.innerWidth >= 770) {
      setMobile(false);
    }
  };
  
  useEffect(() => {
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const navMenu = isMobile ? (
    <div onClick={handleClick} className={style.mobileNavIcon}>
      <img
        className={style.navType}
        src={isOpen ? close : hamburger}
        alt='nav-type'
      />
      <div style={isOpen ? {display: 'block'} : {display: 'none'}} className={style.mobileNavContainer}>
        <ul className={style.mobileNavLinks}>
          <li>
            <Link to='/our-company'>OUR COMPANY</Link>
          </li>
          <li>
            <Link to='/locations'>LOCATIONS</Link>
          </li>
          <li>
            <Link to='contact'>CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className={style.navContainer}>
      <ul className={style.navLinks}>
        <li>
          <Link to='/our-company'>OUR COMPANY</Link>
        </li>
        <li>
          <Link to='/locations'>LOCATIONS</Link>
        </li>
        <li>
          <Link to='contact'>CONTACT</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className={style.headerContainer}>
      <div className={style.logoContainer}>
        <Link to='/'>
          <img src={DarkLogo} alt='logo' />
        </Link>
      </div>
      {navMenu}
    </div>
  );
}

export default Header;
