import React from 'react'
import style from './Button.module.scss'

function LightButton(props) {

    return (
        <div className={
            `${style.buttonContainer} ${props.btn === 'light' ? style.light : style.dark} ${style[props.size]}`
            }>
            {props.buttonContent}
        </div>
    )
}

export default LightButton
