import React, { useState, useEffect } from 'react';
import styles from './Main.module.css';
import Element from '../Element/Element';

const startDate = '2023-09-12'

const Main = ({data}) => {

  return(
    <div className={styles.asteroids} >
      <h2 className={styles.asteroids__title}>Ближайшие подлёты астероидов</h2>
      <div className={styles.asteroids__measurement}>
        <div className={styles.asteroids__measurein}>в километрах |</div> 
        <div className={styles.asteroids__measuremein}>в лунных орбитах</div>
      </div>
      <ul className={styles.asteroids__list}>
      {data[startDate].map(el=> (
        
          <Element key = {el.id} el={el} />
        ))}
      </ul>
  </div>
  )
}

export default Main;