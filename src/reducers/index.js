import { combineReducers} from 'redux'
import shoppingCartReducer from './ShoppingCartReducer'

export default combineReducers ({
  shoppingCart: shoppingCartReducer
})

