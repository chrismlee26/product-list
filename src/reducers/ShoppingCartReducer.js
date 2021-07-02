import { ADD_TO_CART } from '../actions'

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
    default:
      return state
  }
}

export default shoppingCartReducer