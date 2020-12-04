import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Navbar from './components/layout/Navbar';
import Selection from './components/layout/Selection';
import Country from './components/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState(''); 

  useEffect(() => {
    async function getCountries() {
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      const body = await response.json();
      setCountries(
        body.map((country) => {
          return standardize(country);
        })
      );
    }
    getCountries();
  }, []);

// Sets state of country to input value
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

// Sets state of filter, fetches the region of dropdown select value and sets state to an array that holds all countries from that region 
  const handleRegionChange = (e) => {
    setRegion(e.target.value);

    }

//Render all country commponent cards
const allCountries = countries.map((card) => {
  return returnCard(card);
});

//Return countries based off Region

//Filter country by input state
  const filteredCountry = countries.filter((card) => {
    return card.country.toLowerCase().includes(country.toLowerCase())
  }).filter((card) => {
    if (region !== 'Filter by region') {
      return card.region === region
    }
    return filteredCountry;
  })



//Render cards after filtering input value
  const output = (

    country && region === 'Filter by Region' ? filteredCountry :
  
    country ? filteredCountry.map((card) => {
        return returnCard(card);
      })
    : 
    allCountries
  )

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


// Helper Functions
const standardize = (item) => {
  return {
    flag: item.flag,
    country: item.name,
    population: item.population,
    region: item.region,
    capital: item.capital,
  };
};

const returnCard = (item) => {
  return (
    <Country
      key={item.country}
      flag={item.flag}
      country={item.country}
      population={item.population}
      region={item.region}
      capital={item.capital}
    />
  );
}


export default App;
