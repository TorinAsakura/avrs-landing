import React from 'react'
import { connect } from 'react-redux'
import { Row, Layout } from 'flex-layouts'
import { ScrollTo } from 'avrs-ui/src/content'
import { login, register } from '../../../actions'
import Page from '../../../containers/Page'
import Header from '../components/Header'
import Slides from '../components/Slides'
import Capabilities from '../components/Capabilities'
import Connect from '../components/Connect'
import ServicePlans from './ServicePlans'

const Main = ({ query, onLogin, onRegister, onGoToAbout }) => (
  <Page header={false}>
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
  </Page>
)

export default connect(
  state => ({
    query: state.router.location.query,
  }),
  (dispatch, { router }) => ({
    onLogin: () => login(),
    onRegister: () => register(),
    onGoToAbout: () => router.push('/about'),
  }),
)(Main)
