import React from 'react';
import styles from './Input.module.scss';

function Input(props) {
  console.log(props);

  return (
    <div className={styles.inputContainer}>
      <input
        className={`${styles.input} ${styles.empty}`}
        placeholder='&#xF002;     Search for a country...'
        value={props.country}
        onChange={props.handleChange}
      ></input>
    </div>
  );
}

export default Input;
