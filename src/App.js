import './App.css';
import data, {allCategories, categoriesUnique, categoriesWithCounts, namesAndCategories} from './data';

console.log(data)
console.log(allCategories)
console.log(categoriesUnique)
console.log(categoriesWithCounts)
console.log(namesAndCategories)


function App() {
  return (
    <div className="App">
      <h1>Chris' Store</h1>
      <p>Products: {data.length}</p>
      <p>Categories: {categoriesUnique.length}</p>
      <div>
      {namesAndCategories.map(obj => {
        return (
          <button>
            {obj.name}
            <span> {obj.count} </span>
          </button>
        )
      })}
      </div>
      <div>
        {data.map(obj => {
          return (
            <div>
              <h2>{obj.name}</h2>
              <p>{obj.description}</p>
              <p>{obj.price}</p>
              <small>Category: {obj.category} <br></br> Rating: {obj.rating}</small>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
