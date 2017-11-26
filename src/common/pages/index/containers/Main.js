import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { ScrollTo } from 'avrs-ui/src/content'
import Header from '../components/header/Header'
import Slides from '../components/Slides'
import Capabilities from '../components/Capabilities'
import Connect from '../components/connect/Connect'
import ServicePlans from './ServicePlans'
import connect from './connectMain'

const Main = ({ query, onLogin, onRegister, onGoToAbout }) => (
  <Row>
    <Layout>
      <Header
        onLogin={onLogin}
        onRegister={onRegister}
        onGoToAbout={onGoToAbout}
      />
    </Layout>
    <Layout basis='100px' />
    <Layout basis='480px'>
      <Slides />
    </Layout>
    <Layout basis='35px' />
    <Layout>
      <ScrollTo to={query.section}>
        <Capabilities />
      </ScrollTo>
    </Layout>
    <Layout>
      <ServicePlans />
    </Layout>
    <Layout>
      <Connect
        onRegister={onRegister}
      />
    </Layout>
  </Row>
)

export default connect(Main)
