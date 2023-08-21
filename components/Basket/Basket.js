import Link from 'next/link';
import React, {useState} from 'react';
import styles from './Basket.module.css';


const Basket = () => {
  const [countBug,setCountBug] = useState()
  

  return (
    <div className={styles.basket}>

      <p className={styles.basket__title}>Корзина</p>
      <p className={styles.basket__subtitle}>{` астероидов`}</p>
      <Link href={'/basket'} className={styles.basket__button}>
        Отправить
      </Link>
    </div>
  )
}

export default Basket;