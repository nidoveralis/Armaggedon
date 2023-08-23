import Link from 'next/link';
import NextImage from 'next/image';
import Header from '../Header/Header';
import styles from './Asteroid.module.css';
import AstImg from '../../images/pngegg.png';

const Asteroid = ({data}) => {

  return(
    <>
      <Link href='/' className={styles.link} >
        <Header />
      </Link>
      <div className={styles.page}>
        <div>
          <h2>{data.designation}</h2>
          <p>{`Диаметр ${Math.floor(data.estimated_diameter.meters.estimated_diameter_max)} м.`}</p>
          <p>{`Потенцияльно${data.is_potentially_hazardous_asteroid ? '' : ' не'} опасен.`}</p>
        </div>
        <ul className={styles.list}> Сближения
          {data.close_approach_data.map(el=> (
            <li key = {el.key}  className={styles.item}>
              <p className={styles.text}>{`Скорость относительно Земли ${Math.floor(el.relative_velocity.kilometers_per_hour)} км/ч`}</p>
              <p className={styles.text}>{`Время максимального сближения с Землей ${el.close_approach_date_full}.`}</p>
              <p className={styles.text}>{`Расстояние до Земли ${Math.floor(el.miss_distance.kilometers)} км`}</p>
              <p className={styles.text}>{`Летит вокруг орбиты ${el.orbiting_body}`}</p>
            </li>
          ))}
      </ul>
      <NextImage src={AstImg} className={styles.img} alt='астероид' />
      </div>
    </>
  )
}

export default Asteroid;