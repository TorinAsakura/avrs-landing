import url from 'url'
import * as servicePlansActions from '../constants/servicePlans'

const redirectToCabinet = (hash) => {
  const { protocol, host } = window.location

  window.location.assign(`${protocol}//cabinet.${host}/${hash}`)
}

export function login() {
  redirectToCabinet('auth/login')
}

export function register() {
  redirectToCabinet('auth/registration')
}

export function closeModal() {
  const current = url.parse(window.location.href, true)
  const query = Object.keys(current.query).reduce((result, key) => {
    if (key !== 'modal') {
      return {
        ...result,
        [key]: current.query[key],
      }
    }

    return result
  }, {})

  const href = url.format({ ...current, query, search: undefined })

  window.location.replace(href)
}

export function changeServicePlan(type) {
  return {
    type: servicePlansActions.changePlan,
    plan: type,
  }
}

export function changeServicePlanPeriod(period) {
  return {
    type: servicePlansActions.changePeriod,
    period,
  }
}
