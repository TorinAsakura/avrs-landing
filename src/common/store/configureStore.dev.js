import { createStore, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import rootReducer from '../reducers'
import routes from '../routes'

const enhancer = compose(
  reduxReactRouter({ routes, createHistory }),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default))
  }

  return store
}
