import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Text } from 'avrs-ui/src/text'

/* eslint-disable max-len */

const messages = defineMessages({
  title: {
    id: 'main.slides.advantage.title',
    defaultMessage: 'Нам можно доверять',
  },
  message: {
    id: 'main.slides.advantage.message',
    defaultMessage: 'Компания AVERS INTELLIGENCE SYSTEM гарантирует Вам, что програмное обеспечение использует только вычислительные ресурсы компьютера. Проверенно и подтверждено.',
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

const AdvantageTitle = injectIntl(Title)
const AdvantageMessage = injectIntl(Message)

export {
  AdvantageTitle,
  AdvantageMessage,
}
