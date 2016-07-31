import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'
import Helmet from 'react-helmet'
import Root from '../../common/containers/Root'

class Page extends Component {
  renderHead() {
    const dev = this.props.dev
    const head = Helmet.rewind()

    return (
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {!dev && (
          <link rel='stylesheet' href='/index.css' />
        )}
      </head>
    )
  }

  render() {
    const { markup, initialState } = this.props

    return (
      <html>
        {this.renderHead()}
        <body>
          <div
            id='container'
            dangerouslySetInnerHTML={{ __html: markup }}
          />
          <script
            dangerouslySetInnerHTML={{ __html: `window.initialState=${initialState};` }}
          />
          <script src='/index.js'></script>
        </body>
      </html>
    )
  }
}

export default function render(store, env) {
  const dev = env === 'development'
  const initialState = JSON.stringify(store.getState())

  const markup = renderToString(
    <Root store={store} />
  )

  const page = renderToString(
    <Page
      dev={dev}
      markup={markup}
      initialState={initialState}
    />
  )

  return `
    <!doctype html>
    ${page}
  `
}
