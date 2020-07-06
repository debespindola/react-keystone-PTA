import React from 'react';
import './app.css';
import Header from './components/Header';
import FoodList from './components/FoodList'

const App = (params) => {
  return (
    <div className="App">
      <Header/>
      <FoodList/>
    </div>
  ); 
}

export default App;