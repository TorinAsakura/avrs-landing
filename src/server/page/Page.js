/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/html-has-lang */
import React, { Component } from 'react'
import Helmet from 'react-helmet'

class Page extends Component {
  renderHead() {
    const assets = this.props.assets
    const head = Helmet.rewind()

    return (
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}

        <link rel='shortcut icon' href='/favicon.ico' />

        {assets.css && (
          <link rel='stylesheet' href={assets.css} />
        )}
      </head>
    )
  }

  render() {
    const { markup, initialState, assets } = this.props

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
          <script src={assets.js} />
        </body>
      </html>
    )
  }
}

export default Page
