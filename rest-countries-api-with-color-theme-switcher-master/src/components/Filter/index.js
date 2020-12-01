import React, { useState } from 'react'
import styles from './Filter.module.scss';

function Filter() {
    const [select, setSelect] = useState('Filter by Region');
    console.log(select);

    const handleChange = e => {
        setSelect(e.target.value);
    }

    return (
        <div className={styles.filter}>
            <select value={select} defaultValue={'Filter by Region'} onChange={handleChange}>
                <option value='Filter By Region' disabled>Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default Filter
