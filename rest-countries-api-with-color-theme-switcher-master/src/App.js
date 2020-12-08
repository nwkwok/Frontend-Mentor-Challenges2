import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Navbar from './components/layout/Navbar';
import Selection from './components/layout/Selection';
import Country from './components/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState('');
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

// Sets state of country to input value
  const handleCountryChange = (e) => {
    setInput(e.target.value);
  };

// Sets state of filter, fetches the region of dropdown select value and sets state to an array that holds all countries from that region 
  const handleRegionChange = (e) => {
    setRegion(e.target.value);
    setInput('');
    }

//Render cards after filtering input value
  let filteredCountries = countries.filter(country => {
    if (region === 'Filter by Region') {
      return true;
    } 
    return country.region === region
  })

  //Filter country by input state
  filteredCountries = filteredCountries
  .filter((country) => {
    return country.country.toLowerCase().includes(input.toLowerCase())
  });


  const ListOfCards = ({list}) => {
    return(
    <>
      {
        list.map(item => {
        return (
          <Country
            key={item.country}
            flag={item.flag}
            country={item.country}
            population={item.population}
            region={item.region}
            capital={item.capital}
        />
        )
      })
      }
    </>
    )
  }


  return (
    <div className={styles.container}>
      <Navbar />
      <Selection
        country={input}
        handleCountryChange={handleCountryChange}
        region={region}
        handleRegionChange={handleRegionChange}
      />
      <div className={styles.cardContainer}>
        <ListOfCards 
          list={filteredCountries}/>
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

export default App;
