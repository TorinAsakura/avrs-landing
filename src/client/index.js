import React from 'react'
import { render } from 'react-dom'
import configureStore from '../common/store/configureStore'
import Root from '../common/containers/Root'
import './index.css'

const store = configureStore(window.initialState)

render(
  <Root store={store} />,
  document.getElementById('container')
)

if (module.hot) {
  module.hot.accept('../common/containers/Root', () => {
    const Root = require('../common/containers/Root').default // eslint-disable-line no-shadow

    render(
      <Root store={store} />,
      document.getElementById('container')
    )
  })
}
