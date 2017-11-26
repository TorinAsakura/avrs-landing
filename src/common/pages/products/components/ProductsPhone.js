import React from 'react'
import { injectIntl } from 'react-intl'
import { Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'
import { Divider } from 'avrs-ui/src/divider'
import { Link } from 'avrs-ui/src/link'
import { Exclusive } from 'avrs-ui/src/promo'
import PrepaidCard from './PrepaidCard'
import messages from './messages'

const Products = ({ intl, onRegister }) => (
  <Row>
    <Layout basis='10px' />
    <Layout>
      <Block
        offset
        border='hidden'
      >
        <Row>
          <Layout justify='center'>
            <Text
              color='blue400'
              size='large'
            >
              Aversis Software
            </Text>
          </Layout>
          <Layout basis='20px' />
          <Layout justify='center'>
            <Exclusive height={150} />
          </Layout>
          <Layout basis='20px' />
          <Layout>
            <Text weight='light'>
              {intl.formatMessage(messages.software)}
            </Text>
          </Layout>
          <Layout basis='12px' />
          <Layout>
            <Link onClick={onRegister}>
              <Text
                size='small'
                color='blue400'
              >
                {intl.formatMessage(messages.registration)}
              </Text>
            </Link>
            <Space />
            <Text
              color='blue400'
              size='small'
              lineHeight='extended'
            >
              &#10095;
            </Text>
          </Layout>
        </Row>
      </Block>
    </Layout>
    <Layout>
      <Divider />
    </Layout>
    <Layout basis='10px' />
    <Layout>
      <Block
        offset
        border='hidden'
      >
        <Row>
          <Layout justify='center'>
            <Text
              color='blue400'
              size='large'
            >
              Aversis Prepaid Card
            </Text>
          </Layout>
          <Layout basis='20px' />
          <Layout justify='center'>
            <PrepaidCard small />
          </Layout>
          <Layout basis='20px' />
          <Layout>
            <Text weight='light'>
              {intl.formatMessage(messages.card)}
            </Text>
          </Layout>
          <Layout basis='12px' />
          <Layout>
            <Link onClick={onRegister}>
              <Text
                size='small'
                color='blue400'
              >
                {intl.formatMessage(messages.registration)}
              </Text>
            </Link>
            <Space />
            <Text
              color='blue400'
              size='small'
              lineHeight='extended'
            >
              &#10095;
            </Text>
          </Layout>
        </Row>
      </Block>
    </Layout>
    <Layout basis='20px' />
  </Row>
)

export default injectIntl(Products)
