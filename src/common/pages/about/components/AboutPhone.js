import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Block, ScrollTo } from 'avrs-ui/src/content'
import Header from './Header'
import Content from './Content'

const AboutMobile = ({ question, content }) => (
  <ScrollTo
    to={question}
    prefix='about'
  >
    <Row>
      <Layout>
        <Header small />
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
  </ScrollTo>
)

export default AboutMobile
