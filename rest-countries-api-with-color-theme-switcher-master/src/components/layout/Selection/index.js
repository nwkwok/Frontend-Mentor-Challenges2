import React from 'react'
import styles from './Selection.module.scss'
import Input from '../../Input'
import Filter from '../../Filter'

function Selection(props) {
    return (
        <>
        <div className={styles.container}>
            <Input 
                country={props.country}
                handleCountryChange={props.handleCountryChange}
                />
            <Filter 
                region={props.region}
                handleRegionChange={props.handleRegionChange}
                />
        </div>
        </>
    )
}

export default Selection
