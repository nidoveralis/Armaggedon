import Astro from '../../images/astro.png';
import NextImage from 'next/image';
import styles from './Element.module.css';

const Element = ({el}) => {
  //estimated_diameter.kilometers.estimated_diameter_max


  const bigAstro = {width: '36', heigth: '40' }
  const smallAstro = {width: '22', heigth: '24'}

  const dang='⚠ Опасен';
  const astroSize = el.diameter>=100 ? bigAstro : smallAstro;

  return(
    <li className={styles.element}>
      <p className={styles.element__date}>{el.data}</p>
      <div className={styles.element__info}>
        <div className={styles.element__distance}>{el.estimated_diameter_max}</div>
        <NextImage src={Astro} className={styles.element__img} alt='Астероид' {...astroSize} />
        <div className={styles.element__description}>
          <p className={styles.element__name}>{el.name}</p>
          <p className={styles.element__diameter}>{`Ø ${el.estimated_diameter} м`}</p>
        </div>
      </div>
      <button className={`${styles.element__button} ${el.order ? styles.element__button_active : ''}`}>{el.order ? 'В КОРЗИНЕ' : 'ЗАКАЗАТЬ'}</button>
      <p className={styles.element__danger}>{el.is_potentially_hazardous_asteroid && dang}</p>
    </li>
  )
}

export default Element;