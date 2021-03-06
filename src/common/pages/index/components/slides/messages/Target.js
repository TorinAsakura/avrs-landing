import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Text } from 'avrs-ui/src/text'

/* eslint-disable max-len */

const messages = defineMessages({
  title: {
    id: 'main.slides.target.title',
    defaultMessage: 'Наша главная цель – развитие глобальной сети.',
  },
  message: {
    id: 'main.slides.target.message',
    defaultMessage: 'Привлечь ресурсы для развития и ускоренного роста Глобальной Распределенной Вычислительной Системы, а также объединить полученные вычислительные ресурсы ПК участников ...',
  },
})

/* eslint-enable max-len */

const Title = ({ intl }) => (
  <Text size='large'>
    {intl.formatMessage(messages.title)}
  </Text>
)

const Message = ({ intl }) => (
  <Text
    size='normal'
    weight='light'
    color='gray200'
  >
    {intl.formatMessage(messages.message)}
  </Text>
)

const TargetTitle = injectIntl(Title)
const TargetMessage = injectIntl(Message)

export {
  TargetTitle,
  TargetMessage,
}
