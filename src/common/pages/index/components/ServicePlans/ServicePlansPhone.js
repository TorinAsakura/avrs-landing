import React from 'react'
import { injectIntl } from 'react-intl'
import { Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text } from 'avrs-ui/src/text'
import { Section } from 'avrs-ui/src/section'
import Calculator from './Calculator'
import Plans from './Plans'
import messages from './messages'

const ServicePlansPhone = ({
  intl, active, period, basis, standart, premium, business,
  onChangePlan, onChangePeriod,
}) => (
  <Section id='service-plans'>
    <Row>
      <Layout>
        <Block
          offset
          border='hidden'
        >
          <Row>
            <Layout basis='10px' />
            <Layout>
              <Text
                size='large'
                color='black400'
                align='center'
              >
                {intl.formatMessage(messages.title)}
              </Text>
            </Layout>
            <Layout basis='10px' />
            <Layout>
              <Text
                weight='light'
                color='black400'
                align='center'
                lineHeight='extended'
              >
                {intl.formatMessage(messages.message)}
              </Text>
            </Layout>
          </Row>
        </Block>
      </Layout>
      <Layout basis='15px' />
      <Layout>
        <Plans
          scroll
          active={active}
          basis={basis}
          standart={standart}
          premium={premium}
          business={business}
          onChangePlan={onChangePlan}
        />
      </Layout>
      <Layout>
        <Block
          offset
          border='hidden'
        >
          <Row>
            <Layout>
              <Text
                size='large'
                color='gray200'
              >
                {intl.formatMessage(messages.income)}
              </Text>
            </Layout>
            <Layout basis='10px' />
            <Layout>
              <Calculator
                plan={active}
                period={period}
                onChange={onChangePeriod}
              />
            </Layout>
            <Layout grow={1} />
          </Row>
        </Block>
      </Layout>
      <Layout basis='20px' />
    </Row>
  </Section>
)

export default injectIntl(ServicePlansPhone)
