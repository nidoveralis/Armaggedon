import {useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import {addInBasket} from '../../store/astroSlice';
import NextImage from 'next/image';
import Astro from '../../images/astro.png';
import styles from './Element.module.css';
import { bigAstro, smallAstro, dang } from '../../utils/constant';

const Element = ({el, metricKilometers}) => {

  const dispatch = useDispatch();
  const basket = useSelector(state=>state.astro.basket);
  const [orderStatus,setOrderStatus] = useState(basket.some(arrayObj => el.id === arrayObj.id));
  
  const nameElement = [...(el.name.match(/\(.*?\)/g) || [])].map(s => s.slice(1, -1));
  const diametrElement = Math.floor(el.estimated_diameter.meters.estimated_diameter_max);
  const sizeElement = diametrElement>=100 ? bigAstro : smallAstro;
  const distanceElement = {
    kl:el.close_approach_data[0].miss_distance.kilometers.split('.')[0],
    lunar:el.close_approach_data[0].miss_distance.lunar.split('.')[0]
  };
 const distanceKl = `${distanceElement.kl.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')} км`;
 const distanceLunar = `${distanceElement.lunar} ${distanceElement.lunar%100 > 4 ? 'лунныx орбит' : 'лунные орбиты'}`;

 function formatDate(dateString) {
  const months = [
    'янвр', 'февр', 'март', 'апрл', 'май', 'июн',
    'июл', 'авг', 'сент', 'октб', 'нояб', 'декб'
  ];
  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${day} ${month} ${year}`;
};

 function handleClick() {
  dispatch(addInBasket({el}))
  setOrderStatus('В КОРЗИНЕ')
 };

 return(
    <li className={styles.element}>
      <Link href={`/asteroids/${el.id}`} className={styles.link} data={el}>
        <p className={styles.element__date}>{formatDate(el.close_approach_data[0].close_approach_date)}</p>
        <div className={styles.element__info}>
          <div className={styles.element__distance}>{metricKilometers ? distanceKl : distanceLunar}</div>
          <NextImage src={Astro} className={styles.element__img} alt='Астероид' {...sizeElement} />
          <div className={styles.element__description}>
            <p className={styles.element__name}>{nameElement}</p>
            <p className={styles.element__diameter}>{`Ø ${diametrElement} м`}</p>
          </div>
        </div>
      </Link>
      <button className={`${styles.element__button} ${orderStatus ? styles.element__button_active : ''}`} onClick={handleClick} disabled={orderStatus}  >{orderStatus ? 'В КОРЗИНЕ' : 'ЗАКАЗАТЬ'}</button>
      <p className={styles.element__danger}>{el.is_potentially_hazardous_asteroid && dang}</p>
    </li>
  )
}

export default Element;