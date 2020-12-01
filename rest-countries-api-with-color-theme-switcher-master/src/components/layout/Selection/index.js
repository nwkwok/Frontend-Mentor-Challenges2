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
                handleChange={props.handleChange}/>
            <Filter />
        </div>
        </>
    )
}

export default Selection
