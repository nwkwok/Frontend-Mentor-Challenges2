import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'
import styles from './Filter.module.scss';

function Filter(props) {
    const { darkTheme } = useContext(ThemeContext)

    return (
        <div className={darkTheme ? styles.filter : [styles.filter, styles.light].join(' ')}>
            <select 
                    defaultValue={props.region} 
                    onChange={props.handleRegionChange}
                    >
                <option value="Filter by Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default Filter
