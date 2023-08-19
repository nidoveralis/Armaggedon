import Link from 'next/link';
import styles from './Basket.module.css';
import BasKetPage from '../../pages/basket';

const Basket = ({data} ) => {

  return(
    <div className={styles.basket}>

      <p className={styles.basket__title}>Корзина</p>
      <p className={styles.basket__subtitle}>2 астероида</p>
      <Link href='/basket' className={styles.basket__button}>
        Отправить
      </Link>
    </div>
  )
}

export default Basket;