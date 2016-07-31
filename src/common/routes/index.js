import React from 'react'
import { Route } from 'react-router'

const app = ({ children }) => (
  <div style={{ height: '100%' }}>
    {children}
  </div>
)

const Main = () => (
  <div>
    Landing
  </div>
)

export default (
  <Route component={app}>
    <Route path='/' component={Main} />
  </Route>
)
