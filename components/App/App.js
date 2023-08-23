import styles from  './App.module.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Basket from '../Basket/Basket';

const App = ({data}) => {

  return(
    <>
    <Header />
    <div className={styles.page}>
      <Main data={data} />
      <Basket />
    </div>
    </>
  )
}

export default App;