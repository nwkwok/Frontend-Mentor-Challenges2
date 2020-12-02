import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Navbar from './components/layout/Navbar';
import Selection from './components/layout/Selection';
import Country from './components/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('Filter by Region');

  useEffect(() => {
    async function getCountries() {
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      const body = await response.json();
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

 
   

  const handleCountryChange = e => {
    setCountry(e.target.value)
  }

  const handleRegionChange = async e => {
    const response = await fetch(`https://restcountries.eu/rest/v2/region/${e.target.value}`)
    const body = await response.json();
    console.log(body);

    setRegion(body.map(country => {
      return {
      flag: country.flag,
      country: country.name,
      population: country.population,
      region: country.region,
      capital: country.capital
      }
    })
    )
  }

  const filteredCountry = countries.filter(card => 
    card.country.toLowerCase().includes(country.toLowerCase()))

  const allCountries = countries.map(card =>{
    return(
      <Country
        key={card.country}
        flag={card.flag}
        country={card.country}
        population={card.population}
        region={card.region}
        capital={card.capital}
    />
    );
  });

  const output = 
    country ? 
    
      filteredCountry.map(card => {
        return (
          <Country
            key={card.country}
            flag={card.flag}
            country={card.country}
            population={card.population}
            region={card.region}
            capital={card.capital}
            />
          )}
        )
      :
      allCountries

  return (
      <div className={styles.container}>
        <Navbar />
        <Selection 
          country={country}
          handleCountryChange={handleCountryChange}
          region={region}
          handleRegionChange={handleRegionChange}
          />

        <div className={styles.cardContainer}>
          {output}
        </div>
      </div>
   
  );
}

export default App;
