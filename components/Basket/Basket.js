import styles from './Basket.module.css';

const Basket = () => {

  return(
    <div className={styles.basket}>
      <p className={styles.basket__title}>Корзина</p>
      <p className={styles.basket__subtitle}>2 астероида</p>
      <button className={styles.basket__button}>Отправить</button>
    </div>
  )
}

export default Basket;