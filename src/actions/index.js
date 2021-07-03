// Adds 1 from ID
export const ADD_TO_CART = 'ADD_TO_CART'

// Remove 1 from ID
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

// Remove All from ID
export const CLEAR_FROM_CART = 'CLEAR_FROM_CART'

// Clear all items from cart
export const CLEAR_CART = 'CLEAR_CART'

export const addToCart = (index) => {
  return {
    type: ADD_TO_CART,
    payload: { index }
  }
}

export const removeFromCart = (index) => {  
  return {
    type: REMOVE_FROM_CART,
    payload: { index }
  }
}

export const clearFromCart = (index) => {  
  return {
    type: CLEAR_FROM_CART,
    payload: { index }
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}