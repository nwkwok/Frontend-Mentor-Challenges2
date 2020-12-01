import React, { useState } from 'react';
import styles from './Input.module.scss';

function Input(props) {
  const [country, setCountry] = useState('')

const handleChange = e => {
  setCountry(e.target.value)
  console.log(country);
}

  return (
    <div className={styles.inputContainer}>
      <input
        className={`${styles.input} ${styles.empty}`}
        placeholder='&#xF002;     Search for a country...'
        onChange={handleChange}
        value={country}
      ></input>
    </div>
  );
}

export default Input;
