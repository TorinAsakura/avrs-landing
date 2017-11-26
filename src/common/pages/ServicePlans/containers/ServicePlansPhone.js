import { connect } from 'react-redux'
import { register } from '../../../actions'
import ServicePlansPhone from '../components/ServicePlansPhone'

const periodByDays = {
  30: 'month',
  90: 'quarter',
  180: 'halfYear',
  365: 'year',
}

export default connect(
  state => state.servicePlans.items.reduce((result, plan) => ({
    ...result,
    [plan.type]: {
      ...result[plan.type],
      [periodByDays[plan.period]]: plan,
    },
  }), {}),
  () => ({
    onRegister: () => register(),
  }),
)(ServicePlansPhone)
