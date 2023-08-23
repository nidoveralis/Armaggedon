import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../store';
import Order from '../components/Order/Order';



const BasketPage = () => {

  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>Armaggedon</title>
        </Head>
        <Order />
      </div>
    </Provider>
  )
}

export default BasketPage;