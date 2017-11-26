import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { PointerLink } from 'avrs-ui/src/link'

const messages = defineMessages({
  company: {
    id: 'legal_information.summary.company',
    defaultMessage: 'Компания',
  },
  termOfUse: {
    id: 'legal_information.summary.term_of_use',
    defaultMessage: 'Условия использования',
  },
  confidentiality: {
    id: 'legal_information.summary.confidentiality',
    defaultMessage: 'Конфиденциальность',
  },
})

const SummaryPhone = ({ intl }) => (
  <Block
    offset
    border='hidden'
  >
    <Row>
      <Layout>
        <PointerLink to='/legal-information/company'>
          {intl.formatMessage(messages.company)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/legal-information/confidentiality'>
          {intl.formatMessage(messages.confidentiality)}
        </PointerLink>
      </Layout>
    </Row>
  </Block>
)

export default injectIntl(SummaryPhone)
