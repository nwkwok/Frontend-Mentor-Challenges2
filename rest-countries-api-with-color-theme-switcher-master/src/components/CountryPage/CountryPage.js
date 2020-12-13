import React, { useState, useEffect } from 'react';
import style from './CountryPage.module.scss';
import { useHistory } from 'react-router-dom'

function CountryPage(props) {
  const [info, setInfo] = useState([]);
  const [borderCountry, setBorderCountry] = useState([]);
  let history = useHistory();
  const { countryName } = props.match.params;

  useEffect(() => {
    async function getCountry() {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${countryName}`
      );
      const body = await response.json();

      const countryInfo = body.map((country) => {
        const languages = country.languages.map((language) => {
          return language.name;
        });

        const borders = country.borders.map((border) => {
          return border 
        });

        setBorderCountry(borders);

        return {
          key: country.name,
          flag: country.flag,
          name: country.name,
          nativeName: country.nativeName,
          population: numberWithCommas(country.population),
          subregion: country.subregion,
          region: country.region,
          capital: country.capital,
          topLevelDomain: country.topLevelDomain,
          currencies: country.currencies[0].name,
          languages: languages.join(' '),
          borders: borders
        };
        
      });
      setInfo(countryInfo[0]);

    }
    getCountry();
  });

  const {
    capital,
    currencies,
    name,
    nativeName,
    population,
    languages,
    region,
    subregion,
    topLevelDomain,
  } = info;

  const handleClick = () => {
      history.push('/');
  }


  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <>
      <div onClick={handleClick} className={style.btnContainer}>
        <div className={style.btn}>
          <i class='fas fa-arrow-left'></i> Back
        </div>
      </div>

      <div className={style.countryContainer}>
        <div className={style.flagContainer}>
          <img
            className={style.flag}
            src={info.flag}
            alt={`${info.name} flag`}
          ></img>
        </div>
        <div className={style.infoContainer}>
          <div className={style.infoHeading}>
            <h2>{name}</h2>
          </div>
          <div className={style.infoBody}>
            <div className={style.infoBody1}>
              <span>Native Name:</span> {nativeName}
              <br />
              <span>Population:</span> {population}
              <br />
              <span>Region:</span> {region} <br />
              <span>Sub Region:</span> {subregion}
              <br />
              <span>Capital:</span> {capital}
              <br />
            </div>
            <div className={style.infoBody2}>
              <span>Top Level Domain:</span> {topLevelDomain}
              <br />
              <span>Currencies:</span> {currencies}
              <br />
              <span>Languages: </span>
              {languages}
              <br />
            </div>
          </div>
          <div className={style.infoBorders}>
              <span>Border Countries:</span>
              <p className={style.btnBorderContainer}>
              {borderCountry.map(border => {
                  return (
                    <div key={border} className={style.btnBorder}>
                        {border}
                    </div>
                  )
              })}
              </p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryPage;
