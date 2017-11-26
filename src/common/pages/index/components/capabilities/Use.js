import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { RouteLink } from 'avrs-ui/src/link'
import { Text, Space } from 'avrs-ui/src/text'

/* eslint-disable max-len */

const messages = defineMessages({
  header: {
    id: 'main.capabilities.use.header',
    defaultMessage: 'Пользуйтесь',
  },
  title: {
    id: 'main.capabilities.use.title',
    defaultMessage: 'Эксклюзивные продукты',
  },
  message: {
    id: 'main.capabilities.use.message',
    defaultMessage: 'Мы даем возможность получения и использования эксклюзивных продуктов, предлагаемых компанией Aversis Systems.',
  },
  link: {
    id: 'main.capabilities.use.link',
    defaultMessage: 'Посмотреть',
  },
})

/* eslint-enable max-len */

const Header = ({ intl }) => (
  <Text
    size='small'
    color='gray200'
    weight='medium'
  >
    {intl.formatMessage(messages.header).toUpperCase()}
  </Text>
)

const Title = ({ intl, small }) => (
  <Text
    size={small ? 'normal' : 'medium'}
    color='blue700'
  >
    {intl.formatMessage(messages.title)}
  </Text>
)

const Message = ({ intl }) => (
  <Text
    weight='light'
    color='black400'
    lineHeight='extended'
  >
    {intl.formatMessage(messages.message)}
  </Text>
)

const Link = ({ intl }) => (
  <Text color='blue400'>
    <RouteLink to='/products'>
      <Text color='blue400'>
        {intl.formatMessage(messages.link)}
      </Text>
    </RouteLink>
    <Space />
    &#10095;
  </Text>
)

const UseHeader = injectIntl(Header)
const UseTitle = injectIntl(Title)
const UseMessage = injectIntl(Message)
const UseLink = injectIntl(Link)

export {
  UseHeader,
  UseTitle,
  UseMessage,
  UseLink,
}
