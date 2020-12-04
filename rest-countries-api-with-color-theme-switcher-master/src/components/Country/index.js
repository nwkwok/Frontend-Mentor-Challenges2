import React from 'react';
import styles from './Country.module.scss';

function Country(props) {
  return (
      <div className={styles.card}>
        <div className={styles.imageContainer}
          // style={{
          //   backgroundImage: `url(${props.flag})`,
          //   }}>
          >
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
