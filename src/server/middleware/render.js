import { match } from 'redux-router/lib/server'
import configureStore from '../store/configureStore'
import page from '../page'

export default function render(env) {
  return (req, res, next) => {
    const store = configureStore({})

    store.dispatch(match(req.url, (error, redirectLocation, routerState) => {
      if (routerState) {
        res.send(page(store, env))
      } else {
        next()
      }
    }))
  }
}
