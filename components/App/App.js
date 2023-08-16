import styles from  './App.module.css';
import Element from '../Element/Element';
import Basket from '../Basket/Basket';

const App = () => {

  return(
    <div className={styles.page}>
      <header className={styles.header} >
        <h1 className={styles.header__title}>ARMAGEDDON 2023</h1>
        <p className={styles.header__subtitle}>ООО “Команда им. Б. Уиллиса”. Взрываем&nbsp;астероиды с 1998 года.</p>
      </header>

      <div className={styles.asteroids} >
        <h2 className={styles.asteroids__title}>Ближайшие подлёты астероидов</h2>
        <p className={styles.asteroids__subtitle}>в километрах | <span className={styles.asteroids__subtitle_line}>в лунных орбитах</span></p>
        <ul className={styles.asteroids__list}>
          <Element />
          <Element />
        </ul>
      </div>

      <Basket />
    </div>
  )
}

export default App;