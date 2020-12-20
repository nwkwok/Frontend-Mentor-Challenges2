import React from 'react'
import style from './Button.module.scss'

function Button(props) {
    return (
        <div className={style.buttonContainer}>
            {props.buttonContent}
        </div>
    )
}

export default Button
