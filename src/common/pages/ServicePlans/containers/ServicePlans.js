import { connect } from 'react-redux'
import { register } from '../../../actions'
import ServicePlans from '../components/ServicePlans'

const periodByDays = {
  30: 'month',
  90: 'quarter',
  180: 'halfYear',
  365: 'year',
}

const groupByType = (items) => { // eslint-disable-line arrow-body-style
  return items.reduce((result, plan) => {
    const type = plan.type

    if (!result[type]) {
      result[type] = {} // eslint-disable-line no-param-reassign
    }

    return {
      ...result,
      [type]: {
        ...result[type],
        [periodByDays[plan.period]]: plan,
      },
    }
  }, {})
}

export default connect(
  state => groupByType(state.servicePlans.items),
  () => ({
    onRegister: () => register(),
  }),
)(ServicePlans)
