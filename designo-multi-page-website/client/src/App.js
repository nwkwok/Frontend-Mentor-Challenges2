import React from 'react'
import style from './App.module.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import AboutUs from './components/AboutUs/AboutUs'
import LetsTalk from './components/LetsTalk/LetsTalk'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <div className={style.container}>
        <Header />
        <Hero /> 
        <Features />
        <AboutUs />
        <LetsTalk />
      </div>
      <Footer />
    </>
  );
}

export default App;
