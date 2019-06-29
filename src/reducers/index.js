import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import flickerReducer from './flickerReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  flickerReducer
})
