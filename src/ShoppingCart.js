import data from './data'
import { useSelector } from 'react-redux'
import ShoppingCartItem from './ShoppingCartItem'

function ShoppingCart() {
  const cart = useSelector(state => state.shoppingCart)
  const itemsById = data.filter(item => cart.includes(item.id))

  const items = itemsById.map(item => <ShoppingCartItem key={`${item.id}-item`} {...item}/>)
  
  return (
    <div>
      <h1>Shopping Cart:</h1>
      {items}
    </div>
  )
}

export default ShoppingCart