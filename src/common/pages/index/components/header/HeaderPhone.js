import React from 'react'
import { injectIntl } from 'react-intl'
import { Row, Layout } from 'flex-layouts'
import { LogoWhiteWithText } from 'avrs-ui/src/logo'
import { Button, GhostButton } from 'avrs-ui/src/button'
import { HeaderSection } from 'avrs-ui/src/section'
import { Text } from 'avrs-ui/src/text'
import messages from './messages'

const HeaderPhone = ({ intl, onRegister, onGoToAbout }) => (
  <HeaderSection>
    <Row>
      <Layout basis='80px' />
      <Layout>
        <Row align='center'>
          <Layout>
            <LogoWhiteWithText height={35} />
          </Layout>
          <Layout basis='30px' />
          <Layout>
            <Text
              color='white'
              size='medium'
              align='center'
              lineHeight='large'
            >
              {intl.formatMessage(messages.message)}
            </Text>
          </Layout>
          <Layout basis='40px' />
          <Layout>
            <Button
              shadow
              rounded
              color='green'
              onClick={onRegister}
            >
              {intl.formatMessage(messages.join)}
            </Button>
          </Layout>
          <Layout basis='15px' />
          <Layout>
            <Text color='white'>
              {intl.formatMessage(messages.or)}
            </Text>
          </Layout>
          <Layout basis='15px' />
          <Layout>
            <GhostButton
              rounded
              color='white'
              onClick={onGoToAbout}
            >
              {intl.formatMessage(messages.learnMore)}
            </GhostButton>
          </Layout>
        </Row>
      </Layout>
      <Layout basis='40px' />
    </Row>
  </HeaderSection>
)

export default injectIntl(HeaderPhone)
