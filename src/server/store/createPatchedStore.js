import { createStore } from 'redux'
import client from '../api'

export default function createPatchedStore(...args) {
  const store = createStore(...args)
  const { dispatch, getState } = store

  store.asyncActions = []

  store.dispatch = (action) => {
    if (typeof action === 'function') {
      store.asyncActions.push(action)
    } else {
      dispatch(action)
    }
  }

  store.runAsyncActions = () =>
    Promise.all(store.asyncActions.map(action => action(dispatch, getState, client)))

  return store
}
