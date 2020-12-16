import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'
import styles from './Input.module.scss';

function Input(props) {
  const { darkTheme } = useContext(ThemeContext)

  return (
    <div className={styles.inputContainer}>
      <input className={darkTheme ? [styles.input, styles.empty].join(' ') : [styles.input, styles.empty, styles.light].join(' ')}
        placeholder='&#xF002;     Search for a country...'
        value={props.country}
        onChange={props.handleCountryChange}
      ></input>
    </div>
  );
}

export default Input;
