import { createStore, compose, applyMiddleware } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import api from './middleware/api'
import createClient from '../api'
import createReducers from '../reducers'
import getRoutes from '../routes'

export default function configureStore(initialState) {
  const client = createClient(initialState.config.apiUrl)

  const enhancer = compose(
    reduxReactRouter({ getRoutes, createHistory }),
    applyMiddleware(client.middleware(), api(client)),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )

  const store = createStore(createReducers(client.reducer()), initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default))
  }

  return store
}
