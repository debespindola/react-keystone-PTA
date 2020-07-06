import React, { useState } from 'react';
import Classico from './images/classico.png';
import Super from './images/super.png';
import Cold from './images/cold.png';
import Search from './images/search.svg'
import FoodCard from './FoodCard';

const FoodList = () => {
  const [inputValue, setInputValue] = useState('');

  const products = [
    {
      name: 'Hot Dog Clássico',
      picture: Classico,
      price: '8,00',
    },
    {
      name: 'Super Hot Dog',
      picture: Super,
      price: '8,00',
    },
    {
      name: 'Cold Dog',
      picture: Cold,
      price: '8,00',
    }
  ]

  
  return(
    <div className="App">
      <div className="header-elements">
        <h1>Cardápio</h1>
        <input className="input"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}  
          />
        <img className="search" src={Search} alt="lupa"/>
      </div>
      
      { (products.filter((product) => product.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1)).map((product) => <FoodCard key={product.name} product={product} />)}
    </div>
  ) 
}
export default FoodList;