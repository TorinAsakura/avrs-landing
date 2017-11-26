import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Text } from 'avrs-ui/src/text'

/* eslint-disable max-len */

const messages = defineMessages({
  title: {
    id: 'main.slides.benefit.title',
    defaultMessage: 'Таким образом, возможно разработать даже лекарство, например, от рака.',
  },
  message: {
    id: 'main.slides.benefit.message',
    defaultMessage: 'Объединяя ежедневно тысячи компьютеров «Аверсис» уже сегодня предоставляет ресурс в разработке новейших технологий, помогает решить сложные задачи в здравоохранении, осуществляет добычу крипто валют и поддерживает глобальные виртуальные ресурсы в интернете.',
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

const BenefitTitle = injectIntl(Title)
const BenefitMessage = injectIntl(Message)

export {
  BenefitTitle,
  BenefitMessage,
}
