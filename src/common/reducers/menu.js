import * as actions from '../constants/menu'

const initialState = false

export default (state = initialState, action) => {
  if (action.type === actions.show) {
    return true
  } else if (action.type === actions.hide) {
    return false
  }

  return state
}
