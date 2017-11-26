import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import Header from './Header'
import Summary from './Summary'
import Content from './Content'

const LegalInformation = ({ content }) => (
  <Row>
    <Layout>
      <Header />
    </Layout>
    <Layout basis='25px' />
    <Layout>
      <Column>
        <Layout basis='75px' />
        <Layout basis='250px'>
          <Summary />
        </Layout>
        <Layout basis='170px' />
        <Layout
          grow={1}
          shrink={1}
        >
          <Content content={content} />
        </Layout>
        <Layout basis='180px' />
      </Column>
    </Layout>
    <Layout basis='25px' />
  </Row>
)

export default LegalInformation
