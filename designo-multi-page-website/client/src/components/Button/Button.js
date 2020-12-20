import React from 'react'
import style from './Button.module.scss'

function LightButton(props) {

    return (
        <div className={
            `${style.buttonContainer} ${props.type === 'light' ? style.light : null}`
            }>
            {props.buttonContent}
        </div>
    )
}

export default LightButton