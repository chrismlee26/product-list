import { namesAndCategories } from './data'
import './CategoryList.css'

function CategoryList() {
  return (
    <div className="CategoryList">
      {namesAndCategories.map(obj => {
        return (
          <button>
            {obj.name}
            <span> {obj.count} </span>
          </button>
        )
      })}
    </div>
  )
}

export default CategoryList;