import { createStore, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import rootReducer from '../reducers'
import routes from '../routes'

const enhancer = compose(
  reduxReactRouter({ routes, createHistory })
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  return store
}
