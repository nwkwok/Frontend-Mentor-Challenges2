import React from 'react';
import styles from './Input.module.scss';

function index() {
  return (
    <div className={styles.inputContainer}>
      <input
        className={`${styles.input} ${styles.empty}`}
        placeholder='&#xF002;     Search for a country...'
      ></input>
    </div>
  );
}

export default index;
