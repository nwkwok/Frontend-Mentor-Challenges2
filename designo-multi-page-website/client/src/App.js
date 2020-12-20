import React from 'react'
import style from './App.module.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'


function App() {
  return (
    <>
      <div className={style.container}>
        <Header />
        <Hero /> 
      </div>
    </>
  );
}

export default App;
