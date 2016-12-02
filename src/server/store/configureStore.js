import { createStore } from 'redux'
import { reduxReactRouter } from 'redux-router/lib/server'
import { createMemoryHistory as createHistory } from 'history'
import createReducers from '../../common/reducers'
import getRoutes from '../../common/routes'

export default function configureStore(initialState = {}) {
  const store = reduxReactRouter({ getRoutes, createHistory })(createStore)(createReducers(), initialState)

  return store
}
