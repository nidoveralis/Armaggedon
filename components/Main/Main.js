import React, { useState, useEffect } from 'react';
import styles from './Main.module.css';
import Element from '../Element/Element';



const Main = ({data}) => {
  console.log(data)
  const [arrAstro, setArrAstro] = React.useState([]);

  const cards = [
    {
      id:0,
      data: '12 сент 2023',
      estimated_diameter_max: '5 652 475 км',
      name: '2021 FQ',
      estimated_diameter: '234',
      is_potentially_hazardous_asteroid
: true,
      order: false
    },
    {
      id:1,
      data: '12 сент 2023',
      estimated_diameter_max: '12 652 475 км',
      name: '2021 FQ',
      estimated_diameter: '85',
      is_potentially_hazardous_asteroid
: false,
      order: true
    },
    {
      id:3,
      data: '12 сент 2023',
      estimated_diameter_max: '5 652 475 км',
      name: '2021 FQ',
      estimated_diameter_max: '234',
      is_potentially_hazardous_asteroid
: true,
      order: false
    }
  ]

  //useEffect(() => {
    //if (contacts) {
      // Here you will need to map data to your format and set it to arrAstro;
     // console.log(contacts); // this is a place holder
   // }
  //}, [contacts]);
//const a = data.2023-09-12
  return(
    <div className={styles.asteroids} >
      <h2 className={styles.asteroids__title}>Ближайшие подлёты астероидов</h2>
      <div className={styles.asteroids__measurement}>
        <div className={styles.asteroids__measurein}>в километрах |</div> 
        <div className={styles.asteroids__measuremein}>в лунных орбитах</div>
      </div>
      <ul className={styles.asteroids__list}>
      {cards.map(el=> (
        
          <Element key = {el.id} el={el} />
        ))}
      </ul>
  </div>
  )
}

export default Main;