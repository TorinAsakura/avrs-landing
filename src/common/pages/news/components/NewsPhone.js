import React, { Component } from 'react'
import { Row, Layout } from 'flex-layouts'
import Preview from './Preview'

const News = ({ rows }) => (
  <Row>
    <Layout basis='20px' />
    {rows.map(item => (
      <Layout key={item.slug}>
        <Preview
          {...item}
          offset={20}
        />
      </Layout>
    ))}
    <Layout basis='20px' />
  </Row>
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
