/* eslint-disable arrow-parens */
import { connect } from 'react-redux'
import { changeServicePlan, changeServicePlanPeriod } from '../../../actions'
import ServicePlans from '../components/ServicePlans/ServicePlans'

const getByType = (servicePlans = []) => servicePlans.reduce((result, plan) => ({ ...result, [plan.type]: plan }), {})

export default connect(
  state => ({
    active: state.servicePlans.active,
    period: state.servicePlans.period,
    ...getByType(state.servicePlans.items),
  }),
  dispatch => ({
    onChangePlan: (type) => dispatch(changeServicePlan(type)),
    onChangePeriod: (period) => dispatch(changeServicePlanPeriod(period)),
  }),
)(ServicePlans)
