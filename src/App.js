import { useState } from 'react';
import './App.css';
import data, { categoriesUnique } from './data';

import Header from './Header';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

function App() {
  // const [category, setCategory] = useState('All')


  return (
    <div className="App">
      <Header 
        productCount={data.length} 
        categoryCount={categoriesUnique.length} 
      />

      <CategoryList />

      <ProductList />
    </div>
  );
}

export default App;
