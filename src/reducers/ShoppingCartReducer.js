import { ADD_TO_CART } from '../actions'

const shoppingCartReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TO_CART:
      // loop over state
        // if item id === index (payload)
          // item qty + 1
          // return new state
      
      //  add new {id: index (payload), qty: 1}

      return [...state, action.payload.index]
    default:
      return state
  }
}

export default shoppingCartReducer