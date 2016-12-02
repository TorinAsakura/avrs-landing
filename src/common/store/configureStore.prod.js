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
  )

  const store = createStore(createReducers(client.reducer()), initialState, enhancer)

  return store
}
