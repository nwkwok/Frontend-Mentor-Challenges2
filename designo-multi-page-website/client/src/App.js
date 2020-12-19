import React from 'react'
import styles from './App.module.scss'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <div className={styles.container}>
        <Header />
      </div>
    </>
  );
}

export default App;
