import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import photoReducer from './photoReducer.js'

export default (history) => combineReducers({
  router: connectRouter(history),
  photoReducer
})
