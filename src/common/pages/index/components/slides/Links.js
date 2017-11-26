import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Column, Layout } from 'flex-layouts'
import { Text, Space } from 'avrs-ui/src/text'
import { RouteLink } from 'avrs-ui/src/link'

const messages = defineMessages({
  learnMore: {
    id: 'main.slides.lear_more',
    defaultMessage: 'Узнать подробнее',
  },
  showVideo: {
    id: 'main.slides.show_video',
    defaultMessage: 'Смотреть видео',
  },
})

const Links = ({ intl, small }) => (
  <Column>
    <Layout>
      <RouteLink to='/about'>
        <Text
          color='blue400'
          size='small'
        >
          {intl.formatMessage(messages.learnMore)}
        </Text>
      </RouteLink>
      <Space />
      <Text
        color='blue400'
        size='small'
        lineHeight='extended'
      >
        &#10095;
      </Text>
    </Layout>
    <Layout basis={small ? '15px' : '30px'} />
    <Layout>
      <RouteLink to={{ query: { modal: 'video' }, pathname: '/' }}>
        <Text
          size='small'
          color='blue400'
        >
          {intl.formatMessage(messages.showVideo)}
        </Text>
      </RouteLink>
      <Space />
      <Text
        color='blue400'
        size='small'
        lineHeight='extended'
      >
        &#10095;
      </Text>
    </Layout>
  </Column>
)

export default injectIntl(Links)
