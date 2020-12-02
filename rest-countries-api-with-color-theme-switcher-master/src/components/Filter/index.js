import React from 'react'
import styles from './Filter.module.scss';

function Filter(props) {
    
    return (
        <div className={styles.filter}>
            <select 
                    // value={props.region} 
                    defaultValue={props.region} 
                    onChange={props.handleRegionChange}
                    >
                <option value='Filter By Region'>Filter By Region</option>
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
