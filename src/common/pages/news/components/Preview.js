import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Divider } from 'avrs-ui/src/divider'
import { Text, Space, Markdown } from 'avrs-ui/src/text'
import { RouteLink } from 'avrs-ui/src/link'

const messages = defineMessages({
  more: {
    id: 'news.read_more',
    defaultMessage: 'Читать далее',
  },
})

const Preview = ({ intl, offset = 100, slug, title, preview, publishAt }) => (
  <Row>
    <Layout basis='30px' />
    <Layout>
      <Column>
        <Layout basis={`${offset}px`} />
        <Layout shrink={1} basis='100%'>
          <Row>
            <Layout>
              <RouteLink to={`/news/${slug}`}>
                <Text
                  size='large'
                  color='black400'
                >
                  {title}
                </Text>
              </RouteLink>
            </Layout>
            <Layout basis='20px' />
            <Layout>
              <Markdown>
                {preview}
              </Markdown>
            </Layout>
            <Layout>
              <RouteLink to={`/news/${slug}`}>
                <Text
                  color='blue400'
                  weight='light'
                >
                  {intl.formatMessage(messages.more)}
                </Text>
              </RouteLink>
              <Space />
              <Text
                color='blue400'
                weight='light'
                lineHeight='extended'
              >
                &#10095;
              </Text>
            </Layout>
            <Layout basis='30px' />
            <Layout>
              <Column>
                <Layout grow={1} />
                <Layout>
                  <Text
                    size='small'
                    color='gray300'
                  >
                    {intl.formatDate(publishAt, { month: 'long', year: 'numeric', day: 'numeric' })}
                  </Text>
                </Layout>
                <Layout grow={1} />
              </Column>
            </Layout>
            <Layout basis='15px' />
          </Row>
        </Layout>
        <Layout basis={`${offset}px`} />
      </Column>
    </Layout>
    <Layout>
      <Divider />
    </Layout>
    <Layout basis='30px' />
  </Row>
)

export default injectIntl(Preview)
