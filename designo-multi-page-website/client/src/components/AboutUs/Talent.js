import React from 'react';
import style from './Talent.module.scss';
import TalentImg from '../../assets/about/desktop/image-world-class-talent.jpg';

function Talent() {
  return (
    <div className={style.container}>
      <div className={style.contentImage}>
        <img src={TalentImg} alt='world-class-talent' />
      </div>
      <div className={style.contentContainer}>
        <p className={style.header}>World-class talent</p>
        <div className={style.content}>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>

          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Talent;
