import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Row, Layout } from 'flex-layouts'
import { Markdown, Text } from 'avrs-ui/src/text'

/* eslint-disable max-len */
const messages = defineMessages({
  questions: {
    id: 'about.content.questions',
    defaultMessage: 'Остались вопросы?',
  },
  cabinet: {
    id: 'about.content.cabinet',
    defaultMessage: 'Для решения проблем и получения ответов вы можете обратиться через форму обратной связи в личном кабинете.',
  },
})
/* eslint-enable max-len */

const Content = ({ intl, content }) => (
  <Row>
    <Layout basis='20px' />
    <Layout>
      <Markdown>
        {content}
      </Markdown>
    </Layout>
    <Layout basis='40px' />
    <Layout>
      <div style={{ padding: 30, background: '#F8FAFD' }}>
        <Row>
          <Layout>
            <Text
              size='large'
              color='black400'
            >
              {intl.formatMessage(messages.questions)}
            </Text>
          </Layout>
          <Layout basis='10px' />
          <Layout>
            <Text
              color='black400'
              weight='light'
              lineHeight='large'
            >
              {intl.formatMessage(messages.cabinet)}
            </Text>
          </Layout>
        </Row>
      </div>
    </Layout>
    <Layout basis='80px' />
  </Row>
)

export default injectIntl(Content)
