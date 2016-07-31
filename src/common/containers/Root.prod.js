import React from 'react'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'

const Root = ({ store }) => (
  <Provider store={store}>
    <ReduxRouter />
  </Provider>
)

export default Root
