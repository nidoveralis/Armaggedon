import {useState} from 'react';
import Astro from '../../images/astro.png';
import NextImage from 'next/image';
import styles from './Element.module.css';
import { useDispatch } from 'react-redux';
import {addInBasket} from '../../store/astroSlice';

const Element = ({el, metricKilometers}) => {

  const dispatch = useDispatch();
  const [orderStatus,setOrderStatus] = useState(el.order ? 'В КОРЗИНЕ' : 'ЗАКАЗАТЬ')

  const startDate = '2023-09-12'/////
  const bigAstro = {width: '36', heigth: '40' }////
  const smallAstro = {width: '22', heigth: '24'}////

  const dang='⚠ Опасен';////
  
  const nameElement = [...(el.name.match(/\(.*?\)/g) || [])].map(s => s.slice(1, -1));
  const diametrElement = Math.floor(el.estimated_diameter.meters.estimated_diameter_max);
  const sizeElement = diametrElement>=100 ? bigAstro : smallAstro;
  const distanceElement = {
    kl:el.close_approach_data[0].miss_distance.kilometers.split('.')[0],
    lunar:el.close_approach_data[0].miss_distance.lunar.split('.')[0]
  };
 const distanceKl = `${distanceElement.kl.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')} км`;
 const distanceLunar = `${distanceElement.lunar} ${distanceElement.lunar%100 > 4 ? 'лунныx орбит' : 'лунные орбиты'}`;

 function handleClick() {
  el.order=true;
  //addToBasket(el);
  dispatch(addInBasket({el}))
  //el.order=true;
  setOrderStatus('В КОРЗИНЕ')
 };

 return(
    <li className={styles.element}>
      <p className={styles.element__date}>{'12 сент 2023'}</p>
      <div className={styles.element__info}>
        <div className={styles.element__distance}>{metricKilometers ? distanceKl : distanceLunar}</div>
        <NextImage src={Astro} className={styles.element__img} alt='Астероид' {...sizeElement} />
        <div className={styles.element__description}>
          <p className={styles.element__name}>{nameElement}</p>
          <p className={styles.element__diameter}>{`Ø ${diametrElement} м`}</p>
        </div>
      </div>
      <button className={`${styles.element__button} ${el.order ? styles.element__button_active : ''}`} onClick={handleClick} disabled={el.order}  >{orderStatus}</button>
      <p className={styles.element__danger}>{el.is_potentially_hazardous_asteroid && dang}</p>
    </li>
  )
}

export default Element;