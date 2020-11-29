import React from 'react'
import styles from './Selection.module.scss'
import Input from '../../Input'
import Filter from '../../Filter'

function index() {
    return (
        <>
        <div className={styles.container}>
            <Input />
            <Filter />

        </div>
        </>
    )
}

export default index
