import styles from  './Header.module.css';

const Header = () => {

  return(
    <header className={styles.header} >
        <h1 className={styles.header__title}>ARMAGEDDON 2023</h1>
        <p className={styles.header__subtitle}>ООО “Команда им. Б. Уиллиса”. Взрываем&nbsp;астероиды с 1998 года.</p>
      </header>
  )
}

export default Header;