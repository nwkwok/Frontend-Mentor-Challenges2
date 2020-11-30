import React from 'react';
import styles from './Country.module.scss';

function Country(props) {
  console.log(props);
  return (
      <div className={styles.card}>
        <div className={styles.imageContainer}>
        <img className={styles.flag} src={props.flag} alt="flag"></img>
        </div>
        <h4>{props.country}</h4>
        <div className={styles.info}>
      
        <span className={styles.stats} >Population: </span> 
        {props.population}<br />
        <span className={styles.stats} >Region: </span> 
        {props.region}<br />
        <span className={styles.stats} >Capital: </span> 
        {props.capital}<br />
        </div>
      </div>
  );
}

export default Country;
