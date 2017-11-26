import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { RouteLink } from 'avrs-ui/src/link'
import { Text, Space } from 'avrs-ui/src/text'

/* eslint-disable max-len */

const messages = defineMessages({
  header: {
    id: 'main.capabilities.invite.header',
    defaultMessage: 'Приглашайте',
  },
  title: {
    id: 'main.capabilities.invite.title',
    defaultMessage: 'Реферальная программа',
  },
  message: {
    id: 'main.capabilities.invite.message',
    defaultMessage: 'Суть нашей реферальной системы заключается в ее многоуровности. Это означает, что получать прибыль можно не только с клиентов, которых пригласили вы.',
  },
  link: {
    id: 'main.capabilities.invite.link',
    defaultMessage: 'Комиссионные',
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
    <RouteLink to='/about/carrier'>
      <Text color='blue400'>
        {intl.formatMessage(messages.link)}
      </Text>
    </RouteLink>
    <Space />
    &#10095;
  </Text>
)

const InviteHeader = injectIntl(Header)
const InviteTitle = injectIntl(Title)
const InviteMessage = injectIntl(Message)
const InviteLink = injectIntl(Link)

export {
  InviteHeader,
  InviteTitle,
  InviteMessage,
  InviteLink,
}
