import * as actions from '../constants/intl'

const initialState = {
  locale: 'en',
  messages: {},
  content: {},
}

export default (state = initialState, action) => {
  if (action.type === actions.change) {
    return {
      locale: action.locale,
      content: action.content,
      messages: action.messages,
    }
  }

  return state
}
