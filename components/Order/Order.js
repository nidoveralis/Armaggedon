import { useSelector } from 'react-redux';
import Link from 'next/link';
import styles from './Order.module.css'
import Main from '../Main/Main';
import Header from '../Header/Header';

const Order = () => {

  const basket = useSelector(state=>state.astro.basket);

  return (
      <div className={styles.page}>
        <Link href='/' className={styles.link} >
          <Header />
        </Link>
        <Main data={basket} />
    </div>
  )
}

export default Order;