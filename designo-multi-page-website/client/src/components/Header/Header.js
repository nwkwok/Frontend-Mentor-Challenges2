import React from 'react';
import DarkLogo from '../../assets/shared/desktop/logo-dark.png';
import style from './Header.module.scss';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.logoContainer}>
        <Link to='/'><img src={DarkLogo} alt='logo' /></Link>
      </div>
      <div className={style.navContainer}>
        <ul className={style.navLinks}>
          <li><Link to='/our-company'>OUR COMPANY</Link></li>
          <li><Link to='/locations'>LOCATION</Link></li>
          <li><Link to='contact'>CONTACT</Link></li>          
        </ul>
      </div>
    </div>
  );
}

export default Header;
