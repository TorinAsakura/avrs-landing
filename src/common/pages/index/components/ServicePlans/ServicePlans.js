import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Text } from 'avrs-ui/src/text'
import { Section } from 'avrs-ui/src/section'
import Calculator from './Calculator'
import Plans from './Plans'
import messages from './messages'

const ServicePlans = ({ intl, active, period, basis, standart, premium, business, onChangePlan, onChangePeriod }) => (
  <Section id='service-plans'>
    <Column>
      <Layout grow={1} />
      <Layout basis='900px'>
        <Row>
          <Layout basis='100px' />
          <Layout>
            <Column>
              <Layout grow={1} />
              <Layout>
                <Text
                  size='large'
                  color='black400'
                >
                  {intl.formatMessage(messages.title)}
                </Text>
              </Layout>
              <Layout grow={1} />
            </Column>
          </Layout>
          <Layout basis='10px' />
          <Layout>
            <Column>
              <Layout grow={1} />
              <Layout basis='580px'>
                <Text
                  weight='light'
                  color='black400'
                  align='center'
                  lineHeight='extended'
                >
                  {intl.formatMessage(messages.message)}
                </Text>
              </Layout>
              <Layout grow={1} />
            </Column>
          </Layout>
          <Layout basis='65px' />
          <Layout>
            <Plans
              active={active}
              basis={basis}
              standart={standart}
              premium={premium}
              business={business}
              onChangePlan={onChangePlan}
            />
          </Layout>
          <Layout basis='70px' />
          <Layout>
            <Column>
              <Layout grow={1} />
              <Layout basis='200px'>
                <Text
                  size='large'
                  color='gray200'
                >
                  {intl.formatMessage(messages.income)}
                </Text>
              </Layout>
              <Layout basis='300px'>
                <Calculator
                  plan={active}
                  period={period}
                  onChange={onChangePeriod}
                />
              </Layout>
              <Layout grow={1} />
            </Column>
          </Layout>
          <Layout basis='70px' />
        </Row>
      </Layout>
      <Layout grow={1} />
    </Column>
  </Section>
)

export default injectIntl(ServicePlans)
