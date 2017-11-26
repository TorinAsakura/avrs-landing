/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/html-has-lang */
import React from 'react'
import { renderToString } from 'react-dom/server'
import Root from '../../common/containers/Root'
import MobilePage from './MobilePage'
import Page from './Page'

export default function render(store, env) {
  const dev = env === 'development'
  const initialState = JSON.stringify(store.getState())

  const assets = require('../../../build/webpack-assets') // eslint-disable-line global-require

  const markup = renderToString(
    <Root store={store} />,
  )

  const PageComponent = store.getState().config.isPhone ? MobilePage : Page
  const pageAssets = store.getState().config.isPhone ? assets.phone : assets.desktop

  const page = renderToString(
    <PageComponent
      dev={dev}
      markup={markup}
      assets={pageAssets}
      initialState={initialState}
    />,
  )

  return `
    <!doctype html>
    ${page}
  `
}
