import React, { useState, useEffect } from 'react';
import style from './CountryPage.module.scss';

function CountryPage() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        async function getCountry() {
          const response = await fetch(`https://restcountries.eu/rest/v2/name/argentina`);
          const body = await response.json();
          const countryInfo = body.map((country) => {
                return ({
                    key: country.name,
                    flag: country.flag,
                    name: country.name,
                    nativeName: country.nativeName,
                    population: country.population,
                    subregion: country.subregion,
                    region: country.region,
                    capital: country.capital,
                    topLevelDomain: country.topLevelDomain,
                    currencies: country.currencies,
                    languages: country.languages,
                    borders: country.borders
                }
               )
            })
            setInfo(countryInfo[0]);
        }

        getCountry();
      }, []);

      console.log(info);

const { capital, name, nativeName, population, region, subregion, topLevelDomain } = info

const borders = info.borders.map(border => {
    return (
            <div key={border.name} className={style.btnBorder}>
                {border}
            </div>
    )
})

const languages = info.languages.map(language => {
    return (
        <div key={language.name} className={style.language}>
            {language.name}
        </div>
    )
})

    return (
        <>
            <div className={style.btnContainer}>
                <div className={style.btn}>
                    <i class="fas fa-arrow-left"></i> Back
                </div>
            </div>

            <div className={style.countryContainer}>
                <div className={style.flagContainer}>
                    <img className={style.flag} src={info.flag} alt={`${info.name} flag`}></img>
                </div>
                <div className={style.infoContainer}>
                    <div className={style.infoHeading}>
                        <h2>{ name }</h2>
                    </div>
                    <div className={style.infoBody}>
                        <div className={style.infoBody1}>
                        <span>Native Name:</span> { nativeName }<br />
                        <span>Population:</span> { population }<br />
                        <span>Region:</span> { region } <br />
                        <span>Sub Region:</span> { subregion }<br />
                        <span>Capital:</span> { capital }<br />
                        </div>
                        <div className={style.infoBody2}>
                        <span>Top Level Domain:</span> { topLevelDomain }<br />
                        <span>Currencies:</span> { info.currencies[0].name }<br />
                        <span>Languages:</span> { languages }<br />
                        </div>
                    </div>
                    <div className={style.infoBorders}>
                        <div className={style.borderCards}><span>Border Countries:</span> { borders } </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CountryPage
