import React from 'react'
import { injectIntl } from 'react-intl'
import { Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text } from 'avrs-ui/src/text'
import { Section } from 'avrs-ui/src/section'
import { Button } from 'avrs-ui/src/button'
import messages from './messages'

const Connect = ({ intl, onRegister }) => (
  <Section color='blue'>
    <Block
      offset
      border='hidden'
      fill='transparent'
    >
      <Row>
        <Layout basis='15px' />
        <Layout>
          <Text
            color='white'
            size='normal'
          >
            {intl.formatMessage(messages.title)}
          </Text>
        </Layout>
        <Layout basis='15px' />
        <Layout>
          <Text
            weight='light'
            color='white'
            size='small'
            lineHeight='extended'
          >
            {intl.formatMessage(messages.message)}
          </Text>
        </Layout>
        <Layout basis='35px' />
        <Layout justify='center'>
          <Button
            shadow
            rounded
            color='green'
            onClick={onRegister}
          >
            {intl.formatMessage(messages.join)}
          </Button>
        </Layout>
        <Layout basis='25px' />
      </Row>
    </Block>
  </Section>
)

export default injectIntl(Connect)
