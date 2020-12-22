import React from 'react';
import style from './Characteristics.module.scss';
import ImgPassion from '../../assets/home/desktop/illustration-passionate.svg';
import ImgResourceful from '../../assets/home/desktop/illustration-resourceful.svg';
import ImgFriendly from '../../assets/home/desktop/illustration-friendly.svg';

function Characteristics() {
  return (
    <div className={style.container}>
      <div className={style.passionate}>
        <img src={ImgPassion} alt='passionate-img' />
        <p className={style.heading}>Passionate</p>
        <p className={style.description}>
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </p>
      </div>
      <div className={style.resourceful}>
        <img src={ImgResourceful} alt='resourceful-img' />
        <p className={style.heading}>Resourceful</p>
        <p className={style.description}>
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.
        </p>
      </div>
      <div className={style.friendly}>
        <img src={ImgFriendly} alt='friendly-img' />
        <p className={style.heading}>Friendly</p>
        <p className={style.description}>
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </p>
      </div>
    </div>
  );
}

export default Characteristics;
