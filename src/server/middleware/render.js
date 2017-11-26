import { match } from 'redux-router/lib/server'
import configureStore from '../store/configureStore'
import { load as loadServicePlans } from '../../common/pages/ServicePlans/actions'
import { loadPreview as loadNewsPreview } from '../../common/actions/news'
import { init as initLocale } from '../actions/intl'
import config from '../config'
import page from '../page'

export default function render(env) {
  return (req, res, next) => {
    const store = configureStore({
      config: {
        apiUrl: config.get('api:url'),
        isPhone: req.device.type === 'phone',
      },
    })

    store.dispatch(match(req.url, (error, redirectLocation, routerState) => {
      const allowedParams = [undefined, 'de', 'ru']

      if (routerState && allowedParams.includes(routerState.params.locale)) {
        store.dispatch(initLocale())
        store.dispatch(loadServicePlans())
        store.dispatch(loadNewsPreview())

        store.runAsyncActions()
             .then(() => res.send(page(store, env)))
             .catch((renderError) => {
               console.log(renderError)
               next()
             })
      } else {
        next()
      }
    }))
  }
}
