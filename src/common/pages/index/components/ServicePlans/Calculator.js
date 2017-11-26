import React from 'react'
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl'
import { Row, Layout } from 'flex-layouts'
import { Text } from 'avrs-ui/src/text'
import { Slider } from 'avrs-ui/src/slider'

const messages = defineMessages({
  calculator: {
    id: 'main.service_plan.calculator',
    defaultMessage: 'С тарифом {servicePlan} за {period} подписки',
  },
  period: {
    id: 'main.service_plan.period',
    defaultMessage: '{period} дней',
  },
  basis: {
    id: 'service_plans.basis',
    defaultMessage: 'Базис',
  },
  standart: {
    id: 'service_plans.standart',
    defaultMessage: 'Стандарт',
  },
  premium: {
    id: 'service_plans.premium',
    defaultMessage: 'Премиум',
  },
  business: {
    id: 'service_plans.business',
    defaultMessage: 'Бизнес',
  },
})

const Calculator = ({ intl, plan, period = 90, onChange }) => (
  <Row>
    <Layout>
      <Text
        size='large'
      >
        {plan.amount} €
      </Text>
    </Layout>
    <Layout basis='4px' />
    <Layout>
      <Text
        color='gray250'
        size='small'
      >
        <FormattedMessage
          {...messages.calculator}
          values={{
            servicePlan: (
              <Text
                color='blue400'
                size='small'
              >
                {intl.formatMessage(messages[plan.type])}
              </Text>
            ),
            period: (
              <Text
                color='blue400'
                size='small'
              >
                {intl.formatMessage(messages.period, { period })}
              </Text>
            ),
          }}
        />
      </Text>
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <Slider
        value={period}
        markers={[30, 90, 180, 365]}
        onChange={onChange}
      />
    </Layout>
  </Row>
)

export default injectIntl(Calculator)
