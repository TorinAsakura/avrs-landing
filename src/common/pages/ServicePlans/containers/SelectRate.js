import React from 'react'
import { connect } from 'react-redux'
import { register } from '../../../actions'
import { changePeriod, changeTime, changeCPU, changeMemory } from '../actions'
import SelectRate from '../components/SelectRate'

const Container = (props) => {
  if (!props.plan) {
    return null
  }

  return <SelectRate {...props} />
}

export default connect(
  state => ({
    plan: state.servicePlans.active,
  }),
  dispatch => ({
    onChangePeriod: period => dispatch(changePeriod(period)),
    onChangeTime: time => dispatch(changeTime(time)),
    onChangeCPU: cpu => dispatch(changeCPU(cpu)),
    onChangeMemory: memory => dispatch(changeMemory(memory)),
    onRegister: () => dispatch(register()),
  }),
)(Container)
