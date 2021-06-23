import data from './data.json'

export default data

// console.log(data[1])

const allCategories = data.map(obj => obj.category)

// const categorieSet = new Set(allCategories)
// const categoriesUnique = Array.from(categorieSet)

const categoryObjects = allCategories.reduce((obj, cat) => {
  obj[cat] = 0
  return obj
}, {})
const categoriesUnique = Object.keys(categoryObjects)

// Challenge 4
const categoriesWithCounts = allCategories.reduce((obj, cat) => {
  if (obj[cat] === undefined) {
    obj[cat] = 1
  } else {
    obj[cat] += 1
  }
  return obj
}, {})

// Challenge 5
const namesAndCategories = categoriesUnique.map(name => {
  return { name, count: categoriesWithCounts[name] } //{ name: name } is shortened to { name }
})

namesAndCategories.push({ name: 'All', count: data.length })

export {
  allCategories,
  categoriesUnique,
  categoriesWithCounts,
  namesAndCategories,
}
