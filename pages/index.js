import React, { useState } from 'react';
import App from '../components/App/App';
import { CurrentBasketContext } from '../contexts/CurrentBasketContext';

const startDate = '2023-09-12'; // 
const endDate = '2023-09-12'; //

const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`;




export const getStaticProps = async () => {
  const response = await fetch(url);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: data.near_earth_objects },
  }
};

const Index = ({ data }) => {

  const [myOrder, setMyOrder] = useState([]);

  const addToBasket = (item) => {
    setMyOrder((currentItems) => [...currentItems, item]);
  };

  return (
    <CurrentBasketContext.Provider value={{ myOrder }}>
      <div>
        <App data={data[startDate]} addToBasket={addToBasket} />
      </div>
    </CurrentBasketContext.Provider >
  )
}

export default Index;