import React from 'react'
import { injectIntl } from 'react-intl'
import { Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Divider } from 'avrs-ui/src/divider'
import { GhostButton } from 'avrs-ui/src/button'
import { Text } from 'avrs-ui/src/text'
import Header from './Header'
import { Presentation, Brandbook } from './images'
import messages from './messages'

const openPresentation = () =>
  window.open('https://s3.eu-central-1.amazonaws.com/avrs/promo/Presentation.pdf')

const openBrandbook = () =>
  window.open('https://s3.eu-central-1.amazonaws.com/avrs/promo/Brandbook.pdf')

const MarketingMaterialsPhone = ({ intl }) => (
  <Row>
    <Layout>
      <Header small />
    </Layout>
    <Layout>
      <Block
        offset
        border='hidden'
      >
        <Row align='center'>
          <Layout>
            <Text
              size='medium'
              color='black400'
            >
              {intl.formatMessage(messages.presentation)}
            </Text>
          </Layout>
          <Layout basis='16px' />
          <Layout>
            <Presentation />
          </Layout>
          <Layout basis='16px' />
          <Layout>
            <GhostButton
              rounded
              color='blue'
              onClick={openPresentation}
            >
              {intl.formatMessage(messages.view)}
            </GhostButton>
          </Layout>
        </Row>
      </Block>
    </Layout>
    <Layout>
      <Divider />
    </Layout>
    <Layout>
      <Block
        offset
        border='hidden'
      >
        <Row align='center'>
          <Layout>
            <Text
              size='medium'
              color='black400'
            >
              {intl.formatMessage(messages.brandbook)}
            </Text>
          </Layout>
          <Layout basis='16px' />
          <Layout>
            <Brandbook />
          </Layout>
          <Layout basis='16px' />
          <Layout>
            <GhostButton
              rounded
              color='blue'
              onClick={openBrandbook}
            >
              {intl.formatMessage(messages.view)}
            </GhostButton>
          </Layout>
        </Row>
      </Block>
    </Layout>
    <Layout basis='20px' />
  </Row>
)

export default injectIntl(MarketingMaterialsPhone)
