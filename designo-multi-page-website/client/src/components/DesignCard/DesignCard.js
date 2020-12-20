import React from 'react';
import style from './DesignCard.module.scss';

function DesignCard(props) {
  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        <div className={style.image}></div>
        <div className={style.content}>
          <p className={style.name}>{props.name}</p>
          <p className={style.description}>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default DesignCard;
