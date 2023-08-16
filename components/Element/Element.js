import Astro from '../../images/astro.png';
import Arrow from '../../images/icon_arrow.svg';
import NextImage from 'next/image';
import styles from './Element.module.css';

const Element = () => {

  return(
    <li className={styles.element}>
      <p className={styles.element__date}>12 сент 2023</p>
      <div className={styles.element__info}>
        <div className={styles.element__distance}>12 652 475 км</div>
        <NextImage src={Astro} className={styles.element__img} />
        <div className={styles.element__description}>
          <p className={styles.element__name}>2021 FQ</p>
          <p className={styles.element__size}>Ø 85 м</p>
        </div>
      </div>
      <button className={styles.element__button}>ЗАКАЗАТЬ</button>
      <p className={styles.element__danger}>⚠ Опасен</p>
    </li>
  )
}

export default Element;