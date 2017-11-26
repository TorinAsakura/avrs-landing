import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Section } from 'avrs-ui/src/section'
import { Text } from 'avrs-ui/src/text'
import messages from './messages'

const Header = ({ intl, small }) => (
  <Section color='gray'>
    <Column>
      <Layout basis={small ? '25px' : '110px'} />
      <Layout>
        <Row>
          <Layout basis='30px' />
          <Layout>
            <Text
              size={small ? 'medium' : 'large'}
              color='gray250'
            >
              {intl.formatMessage(messages.header)}
            </Text>
          </Layout>
          <Layout basis='4px' />
          <Layout>
            <Text
              weight='light'
              color='gray250'
            >
              AVERS INTELLIGENCE SYSTEM LTD.
            </Text>
          </Layout>
          <Layout basis='30px' />
        </Row>
      </Layout>
    </Column>
  </Section>
)

export default injectIntl(Header)
