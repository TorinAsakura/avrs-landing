import React from 'react'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import ReduxRouter from './ReduxRouter'

const Root = ({ store }) => (
  <AppContainer>
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
  </AppContainer>
)

export default Root
