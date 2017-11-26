import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import SelectRate from './SelectRate'
import Rates from './Rates'

const ServicePlans = () => (
  <div style={{ width: '100%', background: '#F3F5F8' }}>
    <Column>
      <Layout grow={1} />
      <Layout basis='924px'>
        <Row>
          <Layout basis='40px' />
          <Layout>
            <SelectRate />
          </Layout>
          <Layout basis='20px' />
          <Layout>
            <Rates />
          </Layout>
          <Layout basis='40px' />
        </Row>
      </Layout>
      <Layout grow={1} />
    </Column>
  </div>
)

export default ServicePlans
