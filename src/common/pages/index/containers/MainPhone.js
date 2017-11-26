import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { ScrollTo } from 'avrs-ui/src/content'
import HeaderPhone from '../components/header/HeaderPhone'
import CapabilitiesPhone from '../components/CapabilitiesPhone'
import ConnectPhone from '../components/connect/ConnectPhone'
import ServicePlansPhone from './ServicePlansPhone'
import SlidesPhone from '../components/SlidesPhone'
import connect from './connectMain'

const MainPhone = ({ query, onLogin, onRegister, onGoToAbout }) => (
  <Row>
    <Layout>
      <HeaderPhone
        onLogin={onLogin}
        onRegister={onRegister}
        onGoToAbout={onGoToAbout}
      />
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <SlidesPhone />
    </Layout>
    <Layout basis='35px' />
    <Layout>
      <ScrollTo to={query.section}>
        <CapabilitiesPhone />
      </ScrollTo>
    </Layout>
    <Layout>
      <ServicePlansPhone />
    </Layout>
    <Layout>
      <ConnectPhone
        onRegister={onRegister}
      />
    </Layout>
  </Row>
)

export default connect(MainPhone)
