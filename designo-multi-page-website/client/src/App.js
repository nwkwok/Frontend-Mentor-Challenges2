import React from 'react'
import style from './App.module.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home'
import AppDesign from './components/Pages/AppDesign'
import OurCompany from './components/Pages/OurCompany'
import Contact from './components/Pages/Contact'
import GraphicDesign from './components/Pages/GraphicDesign'
import Locations from './components/Pages/Locations'
import WebDesign from './components/Pages/WebDesign'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <div className={style.container}>
        <Header />

      <Switch>
        <Route path='/web-design' component={WebDesign} />
        <Route path='/app-design' component={AppDesign} />
        <Route path='/graphic-design' component={GraphicDesign} />
        <Route path='/our-company' component={OurCompany} />
        <Route path='/locations' component={Locations} />
        <Route path='/contact' component={Contact} />
        <Route path='/' component={Home} />
      </Switch>

      </div>
      <Footer />
    </>
  );
}

export default App;
