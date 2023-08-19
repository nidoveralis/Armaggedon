import React, { useState } from 'react';
import styles from  './App.module.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Basket from '../Basket/Basket';

const App = ({data,addToBasket}) => {


  return(
    <div className={styles.page}>
      <Header />
      <Main data={data} addToBasket={addToBasket} />
      <Basket />
    </div>
  )
}

export default App;