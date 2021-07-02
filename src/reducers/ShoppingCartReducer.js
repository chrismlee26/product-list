import { ADD_TO_CART } from '../actions'

const shoppingCartReducer = (state = [1, 2, 3], action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.payload.index]
    default:
      return state
  }
}

export default shoppingCartReducer