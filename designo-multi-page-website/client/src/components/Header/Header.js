import React from 'react';
import DarkLogo from '../../assets/shared/desktop/logo-dark.png';
import style from './Header.module.scss';

function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.logoContainer}>
        <img src={DarkLogo} alt='logo' />
      </div>
      <div className={style.navContainer}>
        <ul className={style.navLinks}>
          <li>OUR COMPANY</li>
          <li>LOCATION</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
