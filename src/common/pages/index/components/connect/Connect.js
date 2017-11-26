import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Text } from 'avrs-ui/src/text'
import { Section } from 'avrs-ui/src/section'
import { Button } from 'avrs-ui/src/button'
import Network from './network/Network'
import messages from './messages'

const Connect = ({ intl, onRegister }) => (
  <Section color='blue'>
    <Network>
      <Row>
        <Layout basis='55px' />
        <Layout>
          <Column>
            <Layout grow={1} />
            <Layout basis='900px'>
              <Column align='center'>
                <Layout basis='410px'>
                  <Row>
                    <Layout>
                      <Text
                        color='white'
                        size='medium'
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
                  </Row>
                </Layout>
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
              </Column>
            </Layout>
            <Layout grow={1} />
          </Column>
        </Layout>
        <Layout basis='45px' />
      </Row>
    </Network>
  </Section>
)

export default injectIntl(Connect)
