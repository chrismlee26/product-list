import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_FROM_CART, CLEAR_CART } from '../actions'

const shoppingCartReducer = (state = [], action) => {
  console.log(action)
  console.log(state)
  switch(action.type) {
    
    case ADD_TO_CART:
      // loop over state
      for (let i = 0; i < state.length; i+= 1) {
        // if item id === index (payload)
        if (state[i].id === action.payload.index) {
          // item qty + 1
          state[i].qty += 1
          // return new state
          return [...state]
        }
      }
      //  add new {id: index (payload), qty: 1}
      return [...state, { id: action.payload.index, qty: 1 }]
    
    case REMOVE_FROM_CART: // Remove 1 from ID
      return state.map(item => {
        if (item.id === action.payload.index) {
          item.qty -= 1
        }
        return item
      }).filter(item => item.qty > 0)

    case CLEAR_FROM_CART: // Remove All from ID
      return state.filter(item => item.id !== action.payload.index)

    case CLEAR_CART: // Clear all items from cart
      return []

    default:
      return state
  }
}

export default shoppingCartReducer