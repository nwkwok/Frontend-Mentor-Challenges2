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
      setCountries(
        body.map((country) => {
          return standardize(country);
        })
      );
    }
    getCountries();
  }, []);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleRegionChange = async (e) => {

    const response = await fetch(
      `https://restcountries.eu/rest/v2/region/${e.target.value}`
    );
    const body = await response.json();

    const getRegion = body.map((country) => {
      return standardize(country);
    });
    setRegion(getRegion);


    // const filteredRegion = filteredCountry.filter(card => {
    //   card.region.toLowerCase().includes(region.region.toLowerCase());
    // })
  };

//Filter country by input state
  const filteredCountry = countries.filter((card) =>
    card.country.toLowerCase().includes(country.toLowerCase())
  );

//Render all country commponent cards
  const allCountries = countries.map((card) => {
    return returnCard(card);
  });

//Render cards after filtering input value
  const output = country ? filteredCountry.map((card) => {
        return returnCard(card);
      })
    : allCountries;


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
