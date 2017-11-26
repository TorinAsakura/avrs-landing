import React, { Component } from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import Preview from './Preview'

const News = ({ rows }) => (
  <Column>
    <Layout grow={1} />
    <Layout basis='900px'>
      <Row>
        <Layout basis='40px' />
        {rows.map(item => (
          <Layout key={item.slug}>
            <Preview {...item} />
          </Layout>
        ))}
        <Layout basis='100px' />
      </Row>
    </Layout>
    <Layout grow={1} />
  </Column>
)

class NewsContainer extends Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    return (
      <News {...this.props} />
    )
  }
}

export default NewsContainer
