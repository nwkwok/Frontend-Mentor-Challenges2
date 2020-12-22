import React from 'react';
import style from './AllLocations.module.scss';
import Canada from '../../assets/shared/desktop/illustration-canada.svg';
import Australia from '../../assets/shared/desktop/illustration-australia.svg';
import UnitedKingdom from '../../assets/shared/desktop/illustration-united-kingdom.svg';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function AllLocations() {
  return (
    <div className={style.container}>
      <div className={style.canada}>
        <img src={Canada} alt='location' />
        <h4>CANADA</h4>
        <Link to='/locations'>
          <Button buttonContent='SEE LOCATION' />
        </Link>
      </div>
      <div className={style.australia}>
        <img src={Australia} alt='location' />
        <h4>AUSTRALIA</h4>
        <Link to='/locations'>
          <Button buttonContent='SEE LOCATION' />
        </Link>
      </div>
      <div className={style.unitedKingdom}>
        <img src={UnitedKingdom} alt='location' />
        <h4>UNITED KINGDOM</h4>
        <Link to='/locations'>
          <Button buttonContent='SEE LOCATION' />
        </Link>
      </div>
    </div>
  );
}

export default AllLocations;
