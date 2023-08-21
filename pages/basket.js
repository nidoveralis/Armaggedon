import React, {useState} from 'react';
import Main from '../components/Main/Main';
import { useSelector } from 'react-redux';


const BasKetPage = () => {

  const a = useSelector(state=>state.astro.basket);

  console.log(a)


  return (
    <div>
      <h1>fmjfjfjfj</h1>
    </div>
  )
}

export default BasKetPage;