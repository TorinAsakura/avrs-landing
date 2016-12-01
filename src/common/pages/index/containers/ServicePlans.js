/* eslint-disable arrow-parens */
import { connect } from 'react-redux'
import { changeServicePlan, changeServicePlanPeriod } from '../../../actions'
import ServicePlans from '../components/ServicePlans/ServicePlans'

export default connect(
  state => ({
    active: state.servicePlans.active,
    period: state.servicePlans.period,
  }),
  dispatch => ({
    onChangePlan: (type) => dispatch(changeServicePlan(type)),
    onChangePeriod: (period) => dispatch(changeServicePlanPeriod(period)),
  }),
)(ServicePlans)
