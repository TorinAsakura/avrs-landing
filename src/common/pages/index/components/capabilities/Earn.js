import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { RouteLink } from 'avrs-ui/src/link'
import { Text, Space } from 'avrs-ui/src/text'

/* eslint-disable max-len */

const messages = defineMessages({
  header: {
    id: 'main.capabilities.earn.header',
    defaultMessage: 'Зарабатывайте',
  },
  title: {
    id: 'main.capabilities.earn.title',
    defaultMessage: 'Получение дохода',
  },
  message: {
    id: 'main.capabilities.earn.message',
    defaultMessage: 'Мы предлагаем возможность получения дохода от сдачи в аренду свободного вычислительного ресурса своего компьютера. Поступления на ваш счет в течение каждого часа!',
  },
  link: {
    id: 'main.capabilities.earn.link',
    defaultMessage: 'Тарифы',
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
    <RouteLink to='/service-plans'>
      <Text color='blue400'>
        {intl.formatMessage(messages.link)}
      </Text>
    </RouteLink>
    <Space />
    &#10095;
  </Text>
)

const EarnHeader = injectIntl(Header)
const EarnTitle = injectIntl(Title)
const EarnMessage = injectIntl(Message)
const EarnLink = injectIntl(Link)

export {
  EarnHeader,
  EarnTitle,
  EarnMessage,
  EarnLink,
}
