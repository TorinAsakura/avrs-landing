import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Markdown } from 'avrs-ui/src/text'

const Content = ({ content }) => (
  <Row>
    <Layout basis='20px' />
    <Layout>
      <Markdown>
        {content}
      </Markdown>
    </Layout>
    <Layout basis='80px' />
  </Row>
)

export default Content
