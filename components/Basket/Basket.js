import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from './Basket.module.css';

const Basket = () => {

  const basketCount = useSelector(state=>state.astro.basket.length);

  return (
    <div className={styles.basket}>
      <div  className={styles.text}>
        <p className={styles.basket__title}>Корзина</p>
        <p className={styles.basket__subtitle}>{`${basketCount} астероидов`}</p>
      </div>

      <Link href={'/basket'} className={styles.basket__button}>
        Отправить
      </Link>
    </div>
  )
}

export default Basket;