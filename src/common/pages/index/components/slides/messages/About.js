import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Text } from 'avrs-ui/src/text'

/* eslint-disable max-len */

const messages = defineMessages({
  title: {
    id: 'main.slides.about.title',
    defaultMessage: 'Дайте возможность вашему компьютеру принести бо́льшую пользу',
  },
  message: {
    id: 'main.slides.about.message',
    defaultMessage: 'По большому счету, практически каждый из нас не использует потенциал своего компьютера на полную мощность. На что он тратит свою энергию? А если тысячи домашних ПК объединить ...',
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

const AboutTitle = injectIntl(Title)
const AboutMessage = injectIntl(Message)

export {
  AboutTitle,
  AboutMessage,
}
