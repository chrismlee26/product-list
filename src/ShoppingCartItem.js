import { useDispatch } from 'react-redux'
import { removeFromCart, clearFromCart, addToCart } from './actions'


function ShoppingCartItem({ name, price, qty, id }) {
  const total = (price.slice(1) * qty).toFixed(2)
  const dispatch = useDispatch()

  return (
    <p>
      <span>{name} </span>
      <span>{price}</span>
      <span> x {qty}</span>
      <span> = {total}</span>
      <button onClick={() => dispatch(removeFromCart(id))}>-</button>
      <button onClick={() => dispatch(addToCart(id))}>+</button>
      <button onClick={() => dispatch(clearFromCart(id))}>CLEAR</button>
    </p>
  )
}

export default ShoppingCartItem