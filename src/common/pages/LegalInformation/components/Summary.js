import React from 'react'
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl'
import { StyleSheet } from 'elementum'
import { Row, Layout } from 'flex-layouts'
import { Text } from 'avrs-ui/src/text'
import { PointerLink, RouteLink } from 'avrs-ui/src/link'

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
  info: {
    id: 'legal_information.summary.info',
    defaultMessage: 'Для получения дополнительной информации или справки посетите страницу {support} Aversis.',
  },
  support: {
    id: 'legal_information.summary.support',
    defaultMessage: 'службы поддержки',
  },
})

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRight: '1px solid #E5E5E5',
    boxSizing: 'border-box',
    padding: '20px 30px 40px 0px',
    marginBottom: '20px',
    position: 'relative',
    boxShadow: 'inset -4px 0 4px -4px rgba(0,0,0,0.09)',
    minHeight: '600px',
  },
})

const Summary = ({ intl }) => (
  <div className={styles()}>
    <Row fill>
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
      <Layout basis='140px' />
      <Layout>
        <Text
          size='small'
          color='gray250'
          weight='light'
          lineHeight='extended'
        >
          <FormattedMessage
            {...messages.info}
            values={{
              support: (
                <RouteLink to='/support'>
                  <Text
                    size='small'
                    color='blue400'
                    weight='light'
                    lineHeight='extended'
                  >
                    {intl.formatMessage(messages.support)}
                  </Text>
                </RouteLink>
              ),
            }}
          />
        </Text>
      </Layout>
    </Row>
  </div>
)

export default injectIntl(Summary)
