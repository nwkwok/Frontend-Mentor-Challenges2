import React from 'react';
import logo from '../../assets/shared/desktop/logo-dark.png';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt='logo' />
      </div>
      <div className={styles.navContainer}>
        <ul className={styles.navLinks}>
          <li>OUR COMPANY</li>
          <li>LOCATION</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
