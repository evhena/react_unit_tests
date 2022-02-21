// import { Divider } from '@material-ui/core';
import React from 'react';
import ProductContainer from './ProductContainer';
import ProductHeader from './ProductHeader';
import '../style.css';

const App = () => {
  return (
    <div>
      <ProductHeader />
      <ProductContainer />
    </div>
  );
};
export default App;
