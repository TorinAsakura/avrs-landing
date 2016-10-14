import * as actions from '../constants/servicePlans'

const initialState = {
  type: 'standard',
  period: 90,
  active: null,
  items: [],
}

const getActive = (servicePlans, type, period) => {
  const [active] = servicePlans.filter(plan => plan.id.includes(type) && plan.period === period)

  return active
}

export default (state = initialState, action) => {
  if (action.type === 'LOAD_SERVICE_PLANS') {
    return {
      ...state,
      items: action.servicePlans,
      active: getActive(action.servicePlans, state.type, state.period),
    }
  } else if (action.type === actions.changePlan) {
    return {
      ...state,
      type: action.plan,
      active: getActive(state.items, action.plan, state.period),
    }
  } else if (action.type === actions.changePeriod) {
    return {
      ...state,
      period: action.period,
      active: getActive(state.items, state.type, action.period),
    }
  }

  return state
}
