import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'
import styles from './Country.module.scss';

function Country(props) {
  const {darkTheme} = useContext(ThemeContext)
  return (
      <div 
        className={darkTheme ? styles.card : [styles.card, styles.light].join(' ')}
        onClick={props.onClick}
        >
        <div className={styles.imageContainer}>
          <img className={styles.flag} src={props.flag} alt="flag"></img>

        </div>
        <h4>{props.country}</h4>
        <div className={styles.info}>
      
        <span className={styles.stats} >Population: </span> 
        {numberWithCommas(props.population)}<br />
        <span className={styles.stats} >Region: </span> 
        {props.region}<br />
        <span className={styles.stats} >Capital: </span> 
        {props.capital}<br />
        </div>
      </div>
  );
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Country;
