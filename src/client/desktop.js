import React from 'react'
import { render } from 'react-dom'
import 'flex-layouts/lib/flex-layouts.css'
import './analytics'
import configureStore from '../common/store/configureStore'
import Root from '../common/containers/Root'
import './index.css'

const store = configureStore(window.initialState)

window.originalHisotry = store.history

render(
  <Root store={store} />,
  document.getElementById('container'),
)

if (module.hot) {
  module.hot.accept('../common/containers/Root', () => {
    const Root = require('../common/containers/Root').default // eslint-disable-line no-shadow

    render(
      <Root store={store} />,
      document.getElementById('container'),
    )
  })
}
