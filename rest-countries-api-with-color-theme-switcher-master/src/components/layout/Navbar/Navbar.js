import styles from './Navbar.module.scss';
import React from 'react'
// import { ThemeContext } from '../../../context/ThemeContext'

function Navbar() {
    // const { darkTheme, setDarkThem } = useContext(ThemeContext)
    return (
        <div className={styles.container}>
            <div className={styles.containerContent}>
            <p className={styles.bold}>Where in the world?</p>
            <p><i className="fas fa-moon"></i> toggle mode</p>
            </div>
        </div>
    )
}

export default Navbar
