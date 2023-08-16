import Astro from '../../images/astro.png';
import NextImage from 'next/image';
import styles from './Element.module.css';

const Element = ({card}) => {

  const bigAstro = {width: '36px', heigth: '40px' }
  const smallAstro = {width: '22px', heigth: '24px '}

  const dang='⚠ Опасен';
  const astroSize = card.size>=100 ? bigAstro : smallAstro;


  return(
    <li className={styles.element}>
      <p className={styles.element__date}>{card.data}</p>
      <div className={styles.element__info}>
        <div className={styles.element__distance}>{card.distance}</div>
        <NextImage src={Astro} className={styles.element__img} alt='Астероид' {...astroSize} />
        <div className={styles.element__description}>
          <p className={styles.element__name}>{card.name}</p>
          <p className={styles.element__size}>{`Ø ${card.size} м`}</p>
        </div>
      </div>
      <button className={styles.element__button}>ЗАКАЗАТЬ</button>
      <p className={styles.element__danger}>{card.danger && dang}</p>
    </li>
  )
}

export default Element;