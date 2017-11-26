import React from 'react'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import ReduxRouter from './ReduxRouter'
import IntlProvider from './IntlProvider'

const Root = ({ store }) => (
  <AppContainer>
    <Provider store={store}>
      <IntlProvider>
        <ReduxRouter />
      </IntlProvider>
    </Provider>
  </AppContainer>
)

export default Root
