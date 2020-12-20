import React from 'react'
import style from './Button.module.scss'

function DarkButton(props) {
    return (
        <div className={`${style.buttonContainer} ${style.dark}`}>
            {props.buttonContent}
        </div>
    )
}

export default DarkButton
