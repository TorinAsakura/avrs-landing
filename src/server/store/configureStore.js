import { createStore } from 'redux'
import { reduxReactRouter } from 'redux-router/lib/server'
import { createMemoryHistory as createHistory } from 'history'
import rootReducer from '../../common/reducers'
import routes from '../../common/routes'

export default function configureStore(initialState = {}) {
  const store = reduxReactRouter({ routes, createHistory })(createStore)(rootReducer, initialState)

  return store
}
