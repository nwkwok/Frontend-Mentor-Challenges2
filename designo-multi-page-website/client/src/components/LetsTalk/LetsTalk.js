import React from 'react';
import style from './LetsTalk.module.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom'


function LetsTalk() {
  return (
    <div className={style.container}>
      <div className={style.textContent}>
        <h3>
            Let's talk about your project
        </h3>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className={style.button}>
        
        <Link to='/contact'><Button 
            buttonContent='GET IN TOUCH' 
            btn='light' /></Link>
          
      </div>
    </div>
  );
}

export default LetsTalk;
