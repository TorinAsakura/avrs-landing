import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { ScrollTo } from 'avrs-ui/src/content'
import Header from './Header'
import Summary from './Summary'
import Content from './Content'

const About = ({ question }) => (
  <ScrollTo
    to={question}
    prefix='about'
  >
    <Row>
      <Layout>
        <Header />
      </Layout>
      <Layout basis='25px' />
      <Layout>
        <Column>
          <Layout basis='75px' />
          <Layout basis='250px'>
            <Row>
              <Layout>
                <Summary />
              </Layout>
            </Row>
          </Layout>
          <Layout basis='170px' />
          <Layout
            grow={1}
            shrink={1}
          >
            <Content />
          </Layout>
          <Layout basis='180px' />
        </Column>
      </Layout>
      <Layout basis='25px' />
    </Row>
  </ScrollTo>
)

export default About
