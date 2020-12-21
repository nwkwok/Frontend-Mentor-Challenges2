import React from 'react';
import style from './DesignFeatures.module.scss';
import { Link } from 'react-router-dom';

function DesignFeatures(props) {

  return (
    <div className={style.container}>
      <Link to={props.link}>
        <div className={style.webDesign}>
          <img src={props.imageSrc} alt='feature' />
          <div className={style.featureText}>
            <h1>{props.header}</h1>
            <p>
              View Projects <span>{'>'}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DesignFeatures;
