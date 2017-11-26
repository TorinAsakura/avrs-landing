import React, { Component } from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Divider } from 'avrs-ui/src/divider'
import { Text, Space, Markdown } from 'avrs-ui/src/text'
import { RouteLink } from 'avrs-ui/src/link'

const messages = defineMessages({
  backToList: {
    id: 'news.back_to_list',
    defaultMessage: 'Вернуться к ленте новостей',
  },
})

const Detail = ({ intl, offset = 100, title, content, publishAt }) => (
  <Row>
    <Layout>
      <Column>
        <Layout basis={`${offset}px`} />
        <Layout shrink={1} basis='100%'>
          <Row>
            <Layout basis='40px' />
            <Layout>
              <Text
                color='blue400'
                weight='light'
                size='small'
              >
                &#10094;
              </Text>
              <Space />
              <RouteLink to='/news'>
                <Text
                  color='blue400'
                  weight='light'
                  size='small'
                >
                  {intl.formatMessage(messages.backToList)}
                </Text>
              </RouteLink>
            </Layout>
            <Layout basis='15px' />
            <Layout>
              <Text
                size='xlarge'
                color='black400'
              >
                {title}
              </Text>
            </Layout>
            <Layout basis='20px' />
            <Layout>
              <Markdown>
                {content}
              </Markdown>
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
            <Layout basis='20px' />
          </Row>
        </Layout>
        <Layout basis={`${offset}px`} />
      </Column>
    </Layout>
    <Layout>
      <Divider />
    </Layout>
    <Layout basis='15px' />
    <Layout justify='center'>
      <Text
        color='blue400'
        weight='light'
        size='small'
      >
        &#10094;
      </Text>
      <Space />
      <RouteLink to='/news'>
        <Text
          color='blue400'
          weight='light'
          size='small'
        >
          {intl.formatMessage(messages.backToList)}
        </Text>
      </RouteLink>
    </Layout>
    <Layout basis='500px' />
  </Row>
)

class DetailContainer extends Component {
  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    return (
      <Detail {...this.props} />
    )
  }
}

export default injectIntl(DetailContainer)
