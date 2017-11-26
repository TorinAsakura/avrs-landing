import * as actions from '../constants/news'

const initialState = {
  limit: 20,
  offset: 0,
  count: 0,
  rows: [],
  detail: {},
  preview: {},
}

export default (state = initialState, action) => {
  if (action.type === actions.load) {
    return {
      ...state,
      count: action.count,
      rows: action.rows,
    }
  } else if (action.type === actions.loadDetail) {
    return {
      ...state,
      detail: action.post,
    }
  } else if (action.type === actions.loadPreview) {
    return {
      ...state,
      preview: action.preview,
    }
  }

  return state
}
