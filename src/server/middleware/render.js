import { match } from 'redux-router/lib/server'
import configureStore from '../store/configureStore'
import { getServicePlans } from '../services'
import config from '../config'
import page from '../page'

export default function render(env) {
  return async (req, res, next) => {
    const servicePlans = await getServicePlans()

    const store = configureStore({
      config: {
        apiUrl: config.get('api:url'),
      },
    })

    store.dispatch({ type: 'LOAD_SERVICE_PLANS', servicePlans })

    store.dispatch(match(req.url, (error, redirectLocation, routerState) => {
      if (routerState) {
        res.send(page(store, env))
      } else {
        next()
      }
    }))
  }
}
