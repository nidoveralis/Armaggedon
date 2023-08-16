import styles from  './App.module.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Basket from '../Basket/Basket';

const App = () => {

  return(
    <div className={styles.page}>
      <Header />
      <Main />
      <Basket />
    </div>
  )
}

export default App;