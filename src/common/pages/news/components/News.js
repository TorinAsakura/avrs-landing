import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import Preview from './Preview'

const News = ({ news }) => (
  <Column>
    <Layout grow={1} />
    <Layout basis='900px'>
      <Row>
        <Layout basis='40px' />
        {news.map((item, index) => (
          <Layout key={index}>
            <Preview {...item} />
          </Layout>
        ))}
        <Layout basis='100px' />
      </Row>
    </Layout>
    <Layout grow={1} />
  </Column>
)

export default News
