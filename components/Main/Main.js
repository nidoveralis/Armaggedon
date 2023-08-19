import React, { useState, useEffect } from 'react';
import NextImage from 'next/image';
import EathImg from '../../images/eath.png';
import styles from './Main.module.css';
import Element from '../Element/Element';

const startDate = '2023-09-12'



const Main = ({data, addToBasket}) => {

  const [metricKilometers,setMetricKilometers] = useState(true);

  function handleClickMeasurement() {
    setMetricKilometers(!metricKilometers);
  };

  return(
    <div className={styles.asteroids} >
        <NextImage src={EathImg} className={styles.main__img} alt='Планета земля' />
      <h2 className={styles.asteroids__title}>Ближайшие подлёты астероидов</h2>
      <div className={styles.asteroids__measurement}>
        <button className={`${styles.asteroids__measurein} ${metricKilometers ? styles.asteroids__measurein_active : styles.asteroids__measurein_off }`} onClick={handleClickMeasurement} disabled={metricKilometers} >в километрах</button> 
        <span className={styles.line}></span>
        <button className={`${styles.asteroids__measurein} ${metricKilometers ? styles.asteroids__measurein_off : styles.asteroids__measurein_active }`} onClick={handleClickMeasurement} disabled={!metricKilometers} >в лунных орбитах</button>
      </div>
      <ul className={styles.asteroids__list}>
      {data.map(el=> (
        
          <Element key = {el.id} el={el} metricKilometers={metricKilometers} addToBasket={addToBasket} />
        ))}
      </ul>
  </div>
  )
}

export default Main;