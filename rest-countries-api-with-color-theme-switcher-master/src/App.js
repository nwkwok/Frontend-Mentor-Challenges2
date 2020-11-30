import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Navbar from './components/layout/Navbar';
import Selection from './components/layout/Selection';
import Country from './components/Country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      const body = await response.json();
      console.log(body);
      setCountries(body.map((country) => {
          return {
            flag: country.flag,
            country: country.name,
            population: country.population,
            region: country.region,
            capital: country.capital
          }
          ;
        })
      );
    }
    getCountries();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Selection />
        <div className={styles.cardContainer}>

          {countries.map(card => {
            return (
              <Country
                key={card.country}
                flag={card.flag}
                country={card.country}
                population={card.population}
                region={card.region}
                capital={card.capital}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
