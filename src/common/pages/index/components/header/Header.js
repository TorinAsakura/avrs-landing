import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { LogoWhiteWithText } from 'avrs-ui/src/logo'
import { Button, GhostButton } from 'avrs-ui/src/button'
import { HeaderSection } from 'avrs-ui/src/section'
import { Text } from 'avrs-ui/src/text'
import messages from './messages'

const Header = ({ intl, onRegister, onGoToAbout }) => (
  <HeaderSection>
    <Row>
      <Layout basis='100px' />
      <Layout>
        <Row align='center'>
          <Layout>
            <LogoWhiteWithText height={60} />
          </Layout>
          <Layout basis='30px' />
          <Layout>
            <Column justify='center'>
              <Layout basis='350px'>
                <Text
                  color='white'
                  size='medium'
                  align='center'
                  lineHeight='large'
                >
                  {intl.formatMessage(messages.message)}
                </Text>
              </Layout>
            </Column>
          </Layout>
          <Layout basis='4px' />
        </Row>
      </Layout>
      <Layout basis='100px' />
      <Layout>
        <Column align='center'>
          <Layout grow={1} />
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
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='60px' />
    </Row>
  </HeaderSection>
)

export default injectIntl(Header)
