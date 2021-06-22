import { useState } from 'react'
import './App.css';
import data, { categoriesUnique } from './data';

import CategoryList from './CategoryList';
import ProductList from './ProductList'

function App() {
  const [category, setCategory] = useState('All')
  return (
    <div className="App">
      <h1>Chris' Bodega</h1>
      <p>Products: {data.length}</p>
      <p>Categories: {categoriesUnique.length}</p>

      <CategoryList />

      <ProductList />
    </div>
  );
}

export default App;
