import Link from 'next/link';
import React, {useState} from 'react';
import styles from './Basket.module.css';
import { CurrentBasketContext } from '../../contexts/CurrentBasketContext';


const Basket = () => {
  const BasketContext = React.useContext(CurrentBasketContext);
  const [countBug,setCountBug] = useState()
console.log(BasketContext)
  

  return (
    <div className={styles.basket}>

      <p className={styles.basket__title}>Корзина</p>
      <p className={styles.basket__subtitle}>{`${BasketContext.myOrder.length} астероидов`}</p>
      <Link href={'/basket'} className={styles.basket__button} a={BasketContext}>
        Отправить
      </Link>
    </div>
  )
}

export default Basket;