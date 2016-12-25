import { lensPath, set } from 'ramda'
import * as actions from '../constants/support'

const formatErrors = (errors = []) =>
  errors.reduce((result, error) => set(lensPath(error.key), error.message, result), {})

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
      errors: formatErrors(action.errors),
    }
  } else if (action.type === actions.clear) {
    return initialState
  }

  return state
}
