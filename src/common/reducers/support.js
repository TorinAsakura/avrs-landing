import * as actions from '../constants/support'

const initialState = {
  email: '',
  subject: '',
  message: '',
  errors: {},
}

export default (state = initialState, action) => {
  if (action.type === actions.change) {
    return {
      ...state,
      [action.field]: action.value,
    }
  } else if (action.type === actions.setErrors) {
    return {
      ...state,
      errors: action.errors,
    }
  } else if (action.type === actions.clear) {
    return initialState
  }

  return state
}
