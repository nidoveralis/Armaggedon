import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../components/App/App';

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

  

  return (
    <Provider store={store}>
      <div>
        <App data={data[startDate]} />
      </div>
    </Provider >
  )
}

export default Index;