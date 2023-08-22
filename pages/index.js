import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../components/App/App';
import { url } from '../utils/constant';

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
  const arr = [];
  function flattenObject(){for (let key in data) {
    arr.push(...data[key])
  }};
  flattenObject();

  return (
    <Provider store={store}>
      <div>
        <App data={arr} />
      </div>
    </Provider >
  )
}

export default Index;