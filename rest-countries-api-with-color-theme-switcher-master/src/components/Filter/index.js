import React, { useState } from 'react'
import styles from './Filter.module.scss';

function Filter() {
    const [select, setSelect] = useState('Filter by Region');

    const handleChange = e => {
        setSelect(e.target.value);
    }

    return (
        <div className={styles.filter}>
            <label>
            <select value={select} onChange={handleChange}>
                {/* Look up default react option  */}
                <option disabled selected value='Filter By Region'>Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            </label>
        </div>
    )
}

export default Filter
