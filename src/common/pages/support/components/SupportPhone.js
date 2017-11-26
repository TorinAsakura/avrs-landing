import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Button, GhostButton } from 'avrs-ui/src/button'
import { Condition } from 'avrs-ui/src/condition'
import { Text } from 'avrs-ui/src/text'
import { Block } from 'avrs-ui/src/content'
import { Textarea } from 'avrs-ui/src/textarea'
import { Input } from 'avrs-ui/src/input'
import { Label } from 'avrs-ui/src/label'
import messages from './messages'

const SupportPhone = ({
  intl, email, subject, message, errors = {}, router,
  onChangeEmail, onChangeSubject, onChangeMessage, onSend,
}) => (
  <div style={{ width: '100%', background: '#F3F5F8' }}>
    <Column>
      <Layout basis='10px' />
      <Layout shrink={1} basis='100%'>
        <Row>
          <Layout basis='10px' />
          <Layout justify='center'>
            <Block offset attach='bottom'>
              <Row>
                <Layout justify='center'>
                  <Text>
                    {intl.formatMessage(messages.title)}
                  </Text>
                </Layout>
              </Row>
            </Block>
          </Layout>
          <Layout>
            <Block offset>
              <Row>
                <Layout basis='10px' />
                <Layout>
                  <Label>
                    {intl.formatMessage(messages.email)}
                  </Label>
                </Layout>
                <Layout basis='5px' />
                <Layout>
                  <Input
                    value={email}
                    invalid={errors.email}
                    onChange={onChangeEmail}
                  />
                </Layout>
                <Condition match={errors.email}>
                  <Row>
                    <Layout basis='5px' />
                    <Layout>
                      <Text color='red400' size='xsmall'>
                        {errors.email}
                      </Text>
                    </Layout>
                  </Row>
                </Condition>
                <Layout basis='20px' />
                <Layout>
                  <Label>
                    {intl.formatMessage(messages.subject)}
                  </Label>
                </Layout>
                <Layout basis='5px' />
                <Layout>
                  <Input
                    value={subject}
                    invalid={errors.subject}
                    onChange={onChangeSubject}
                  />
                </Layout>
                <Condition match={errors.subject}>
                  <Row>
                    <Layout basis='5px' />
                    <Layout>
                      <Text color='red400' size='xsmall'>
                        {errors.subject}
                      </Text>
                    </Layout>
                  </Row>
                </Condition>
                <Layout basis='20px' />
                <Layout>
                  <Label>
                    {intl.formatMessage(messages.message)}
                  </Label>
                </Layout>
                <Layout basis='5px' />
                <Layout>
                  <Textarea
                    rows={8}
                    value={message}
                    invalid={errors.message}
                    onChange={onChangeMessage}
                  />
                </Layout>
                <Condition match={errors.message}>
                  <Row>
                    <Layout basis='5px' />
                    <Layout>
                      <Text color='red400' size='xsmall'>
                        {errors.message}
                      </Text>
                    </Layout>
                  </Row>
                </Condition>
                <Layout basis='25px' />
                <Layout>
                  <Column>
                    <Layout grow={1} />
                    <Layout>
                      <GhostButton
                        rounded
                        shadow
                        onClick={router.goBack}
                      >
                        {intl.formatMessage(messages.cancel)}
                      </GhostButton>
                    </Layout>
                    <Layout basis='15px' />
                    <Layout>
                      <Button
                        color='green'
                        rounded
                        shadow
                        onClick={onSend}
                      >
                        {intl.formatMessage(messages.send)}
                      </Button>
                    </Layout>
                    <Layout grow={1} />
                  </Column>
                </Layout>
                <Layout basis='10px' />
              </Row>
            </Block>
          </Layout>
          <Layout basis='20px' />
        </Row>
      </Layout>
      <Layout basis='10px' />
    </Column>
  </div>
)

export default injectIntl(SupportPhone)
