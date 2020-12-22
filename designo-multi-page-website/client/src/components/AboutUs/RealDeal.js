import React from 'react';
import style from './RealDeal.module.scss';
import RealDealImg from '../../assets/about/desktop/image-real-deal.jpg';

function RealDeal() {
  return (
    <div className={style.container}>

      <div className={style.contentContainer}>
        <p className={style.header}>The real deal</p>
        <div className={style.content}>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
      <div className={style.contentImage}>
        <img src={RealDealImg} alt='real-deal' />
      </div>
    </div>
  );
}

export default RealDeal;
