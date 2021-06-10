import data from './data.json'

export default data

// console.log(data[1])

const allCategories = data.map(obj => obj.category)

// const categoryObjects = allCategories.reduce((obj, cat) => {
//   obj[cat] = 0
//   return obj
// }, {})
// const categoriesUnique = Object.keys(categoryObjects)

const categorieSet = new Set(allCategories)
const categoriesUnique = Array.from(categorieSet)

export {
  allCategories,
  categoriesUnique
}
