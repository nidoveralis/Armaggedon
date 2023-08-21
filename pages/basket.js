import React, {useState} from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Order from '../components/Order/Order';



const BasketPage = () => {

  return (
    <Provider store={store}>
      <div>
        <Order />
      </div>
    </Provider>
  )
}

export default BasketPage;