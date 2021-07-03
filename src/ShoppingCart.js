import data from './data'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from './actions'
import ShoppingCartItem from './ShoppingCartItem'

function ShoppingCart() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.shoppingCart)
  const items = cart.map(item => {
    // find item in data to get name & price
    for (let i = 0; i < data.length; i += 1) {
      // if data id === item id 
      if (data[i].id === item.id) {
        // return shoppingCartItem & set props
        return <ShoppingCartItem key={`${item.id}-item`} {...data[i]} qty={item.qty} />
      }
    }
  })
  
  return (
    <div>
      <h2>Shopping Cart:</h2>
      {items}
      <button onClick={() => dispatch(clearCart())}>Clear All</button>
    </div>
  )
}

export default ShoppingCart