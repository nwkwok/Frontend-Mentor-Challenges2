import React from 'react';
import style from './DesignFeatures.module.scss';
import { Link } from 'react-router-dom';

function DesignFeatures(props) {
  return (
    <div className={style.container}>
      <div className={style.webDesign}>
        <div className={style.scrim}>
        <Link to={props.link}>
          <img src={props.imageSrc} alt='feature' />
          <div className={style.featureText}>
            <h1>{props.header}</h1>
            <p>
              View Projects <span>{'>'}</span>
            </p>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default DesignFeatures;
