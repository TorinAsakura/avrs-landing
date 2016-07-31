import React from 'react'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import { AppContainer } from 'react-hot-loader'

const Root = ({ store }) => (
  <AppContainer>
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
  </AppContainer>
)

export default Root
