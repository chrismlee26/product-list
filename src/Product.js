import { useDispatch } from 'react-redux'
import { addToCart } from './actions'

function Product(props) {
  const { name, description, price, category, rating, id } = props
  const dispatch = useDispatch()

  return (
    <div className="Product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <small>Category: {category} <br></br> Rating: {rating}</small>
      <button
        onClick={() => dispatch(addToCart(id))}
      >Add to cart
      </button>
  </div>
  )
}

export default Product