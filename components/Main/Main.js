import styles from './Main.module.css';
import Element from '../Element/Element';

const Main = () => {

  const cards = [
    {
      _id:0,
      data: '12 сент 2023',
      distance: '5 652 475 км',
      name: '2021 FQ',
      size: '234',
      danger: true
    },
    {
      _id:1,
      data: '12 сент 2023',
      distance: '12 652 475 км',
      name: '2021 FQ',
      size: '85',
      danger: false
    }
  ]

  return(
    <div className={styles.asteroids} >
      <h2 className={styles.asteroids__title}>Ближайшие подлёты астероидов</h2>
      <p className={styles.asteroids__subtitle}>в километрах | <span className={styles.asteroids__subtitle_line}>в лунных орбитах</span></p>
      <ul className={styles.asteroids__list}>
      {cards.map(card=> (
          <Element key = {card._id} card={card} />
        ))}
      </ul>
  </div>
  )
}

export default Main;