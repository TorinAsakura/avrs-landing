import React from 'react'
import { Provider } from 'react-redux'
import ReduxRouter from './ReduxRouter'

const Root = ({ store }) => (
  <Provider store={store}>
    <ReduxRouter />
  </Provider>
)

export default Root
