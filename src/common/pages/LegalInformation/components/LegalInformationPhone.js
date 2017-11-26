import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Divider } from 'avrs-ui/src/divider'
import Header from './Header'
import Summary from './SummaryPhone'
import Content from './Content'

const LegalInformationPhone = ({ content }) => (
  <Row>
    <Layout>
      <Header small />
    </Layout>
    <Layout>
      <Summary />
    </Layout>
    <Layout>
      <Divider />
    </Layout>
    <Layout>
      <Block
        offset
        border='hidden'
      >
        <Content content={content} />
      </Block>
    </Layout>
  </Row>
)

export default LegalInformationPhone
