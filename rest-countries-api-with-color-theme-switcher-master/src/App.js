import React from 'react';
import styles from './App.module.scss';
import Navbar from './components/layout/Navbar';
import Selection from './components/layout/Selection'

function App() {
  return (
    <>
      <div className={styles.container}>
      <Navbar />
      <Selection />     
      
      </div>
    </>
  );
}

export default App;
