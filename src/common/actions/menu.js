import * as actions from '../constants/menu'

export function show() {
  return { type: actions.show }
}

export function hide() {
  return { type: actions.hide }
}
