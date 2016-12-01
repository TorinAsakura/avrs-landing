import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'
import servicePlans from './servicePlans'
import news from './news'

export default combineReducers({
  router,
  servicePlans,
  news,
})
