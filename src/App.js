import { useState } from 'react';
import './App.css';
import data, { categoriesUnique } from './data';

import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import rootReducer from './reducers';

import Header from './Header';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Inventory from './Inventory';
import ShoppingCart from './ShoppingCart';

const store = createStore(rootReducer)

function App() {
  // State variables to pass to children
  const [category, setCategory] = useState('All')

  return (
    <Provider store={store}>
      <div className="App">
        <Header 
          title="Chris' Bodega"
          productCount={data.length} 
          categoryCount={categoriesUnique.length} 
        />

        <CategoryList 
          category={category}
          onClick={newCategory => setCategory(newCategory)}
        />

        <ShoppingCart />

        <ProductList 
          category={category}
        />

        <Inventory />
      </div>
    </Provider>
  );
}

export default App;
