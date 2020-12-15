import styles from './Navbar.module.scss';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import Moon from '../../Icons/Moon';
import Sun from '../../Icons/Sun';

function Navbar() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkTheme(!darkTheme)
    console.log(darkTheme);
  };


  return (
    <div className={darkTheme ? styles.container : [styles.container, styles.light].join(' ')}>
      <div className={styles.containerContent}>
        <p 
            className={
                darkTheme ? styles.bold : [styles.bold, styles.light].join(' ')}>
                    Where in the world?</p>
     
            <p 
                onClick={handleClick}
                className={darkTheme ? undefined : styles.light}>
                    {darkTheme ? <Moon /> : <Sun />}
            </p>
      </div>
    </div>
  );
}

export default Navbar;

// className={!darkTheme ? [styles.container, styles.light].join(' ') : undefined}