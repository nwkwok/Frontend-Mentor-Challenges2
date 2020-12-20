import React from 'react'
import style from './Button.module.scss'

function LightButton(props) {
    return (
        <div className={`${style.buttonContainer} ${style.light}`}>
            {props.buttonContent}
        </div>
    )
}

export default LightButton
