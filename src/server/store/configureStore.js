import { reduxReactRouter } from 'redux-router/lib/server'
import { createMemoryHistory as createHistory } from 'history'
import createStore from './createPatchedStore'
import createReducers from '../../common/reducers'
import getDesktopRoutes from '../../common/routes'
import getPhoneRoutes from '../../common/routes/phone'

export default function configureStore(initialState = {}) {
  const getRoutes = initialState.config.isPhone ? getPhoneRoutes : getDesktopRoutes
  const store = reduxReactRouter({ getRoutes, createHistory })(createStore)(createReducers(), initialState)

  return store
}
