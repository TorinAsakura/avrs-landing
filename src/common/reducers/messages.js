import * as actions from '../constants/messages'

const initialState = []

export default (state = initialState, action) => {
  if (action.type === actions.send) {
    return state.concat([{ key: action.key, message: action.message }])
  } else if (action.type === actions.dismiss) {
    return state.filter(({ key }) => key !== action.key)
  }

  return state
}
