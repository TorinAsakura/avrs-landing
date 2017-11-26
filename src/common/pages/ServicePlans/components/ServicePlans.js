import React from 'react'
import { Row, Layout } from 'flex-layouts'
import ServicePlan from './ServicePlan'

const ServicePlans = ({
  active, basis, standart, premium, business,
  onMonth, onQuarter, onHalfYear, onYear, onRegister,
}) => (
  <Row>
    <Layout>
      <ServicePlan
        {...basis}
        type='basis'
        color='gray250'
        onOpenProduct={onRegister}
        onMonth={() => onMonth('basis')}
        onQuarter={() => onQuarter('basis')}
        onHalfYear={() => onHalfYear('basis')}
        onYear={() => onYear('basis')}
        active={active && active.type === 'basis' ? active : null}
      />
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <ServicePlan
        {...standart}
        type='standart'
        color='blue400'
        onOpenProduct={onRegister}
        onMonth={() => onMonth('standart')}
        onQuarter={() => onQuarter('standart')}
        onHalfYear={() => onHalfYear('standart')}
        onYear={() => onYear('standart')}
        active={active && active.type === 'standart' ? active : null}
      />
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <ServicePlan
        {...premium}
        type='premium'
        color='orange500'
        onOpenProduct={onRegister}
        onMonth={() => onMonth('premium')}
        onQuarter={() => onQuarter('premium')}
        onHalfYear={() => onHalfYear('premium')}
        onYear={() => onYear('premium')}
        active={active && active.type === 'premium' ? active : null}
      />
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <ServicePlan
        {...business}
        type='business'
        color='green500'
        onOpenProduct={onRegister}
        onMonth={() => onMonth('business')}
        onQuarter={() => onQuarter('business')}
        onHalfYear={() => onHalfYear('business')}
        onYear={() => onYear('business')}
        active={active && active.type === 'business' ? active : null}
      />
    </Layout>
  </Row>
)

export default ServicePlans
