import { useState } from 'react';
import './App.css';
import data, { categoriesUnique } from './data';

import Header from './Header';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

function App() {
  // State variables to pass to children
  const [category, setCategory] = useState('All')


  return (
    <div className="App">
      <Header 
        title="Chris' Bodega"
        productCount={data.length} 
        categoryCount={categoriesUnique.length} 
      />

      <CategoryList 
        category={category}
        // Why do we get to define newCategory here? How does it still work?
        onClick={newCategory => setCategory(newCategory)}
      />

      <ProductList 
        category={category}
      />
    </div>
  );
}

export default App;
