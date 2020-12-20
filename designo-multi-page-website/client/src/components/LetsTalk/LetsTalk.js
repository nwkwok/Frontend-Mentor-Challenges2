import React from 'react';
import style from './LetsTalk.module.scss';
import Button from '../Button/Button';

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
      <div>
        <Button 
            buttonContent='GET IN TOUCH' 
            type='light' />
      </div>
    </div>
  );
}

export default LetsTalk;
