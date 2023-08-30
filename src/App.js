import React from 'react';

import ProductList from './components/products/ProductList';

import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';

const App = () => {

  return (
    <>
      <NavBar/>
      <Header/>
      <ProductList />
    </>
  );
};

export default App;
