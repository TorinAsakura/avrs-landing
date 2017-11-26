import { connect } from 'react-redux'
import { changePlan, changePeriod } from '../../../pages/ServicePlans/actions'

const getByType = (servicePlans = [], period) =>
  servicePlans.filter(plan => plan.period === period)
              .reduce((result, plan) => ({ ...result, [plan.type]: plan }), {})

export default connect(
  state => ({
    active: state.servicePlans.active,
    period: state.servicePlans.period,
    ...getByType(state.servicePlans.items, state.servicePlans.period),
  }),
  dispatch => ({
    onChangePlan: type => dispatch(changePlan(type)),
    onChangePeriod: period => dispatch(changePeriod(period)),
  }),
)
