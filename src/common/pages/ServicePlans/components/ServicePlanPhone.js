import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Table, Row, Cell } from 'avrs-ui/src/table'

const messages = defineMessages({
  title: {
    id: 'service_plans.plan.title',
    defaultMessage: 'Подписка',
  },
  period: {
    id: 'service_plans.plan.period',
    defaultMessage: '{period} Дней',
  },
  time: {
    id: 'service_plans.plan.time',
    defaultMessage: 'Аренда часов в сутки',
  },
  cpu: {
    id: 'service_plans.plan.cpu',
    defaultMessage: 'Загрузка CPU',
  },
  memory: {
    id: 'service_plans.plan.memory',
    defaultMessage: 'Загрузка RAM',
  },
  price: {
    id: 'service_plans.plan.price',
    defaultMessage: 'Стоимость лицензии',
  },
  profitabilityPerHour: {
    id: 'service_plans.plan.profitability_per_hour',
    defaultMessage: 'Рентабельность в час',
  },
  profitabilityPerDay: {
    id: 'service_plans.plan.profitability_per_day',
    defaultMessage: 'Рентабельность в день',
  },
  amount: {
    id: 'service_plans.plan.amount',
    defaultMessage: 'Общая сумма на выплату',
  },
})

const ServicePlan = ({ intl, month, quarter, halfYear, year }) => (
  <Table>
    <colgroup>
      <col style={{ width: '36%' }} />
      <col style={{ width: '18%' }} />
      <col style={{ width: '18%' }} />
      <col style={{ width: '18%' }} />
      <col style={{ width: '18%' }} />
    </colgroup>
    <Row>
      <Cell>
        {intl.formatMessage(messages.title)}
      </Cell>
      <Cell align='center'>
        {intl.formatMessage(messages.period, { period: 30 })}
      </Cell>
      <Cell align='center'>
        {intl.formatMessage(messages.period, { period: 90 })}
      </Cell>
      <Cell align='center'>
        {intl.formatMessage(messages.period, { period: 180 })}
      </Cell>
      <Cell align='center'>
        {intl.formatMessage(messages.period, { period: 365 })}
      </Cell>
    </Row>
    <Row>
      <Cell>
        {intl.formatMessage(messages.time)}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {month.time}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {quarter.time}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {halfYear.time}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {year.time}
      </Cell>
    </Row>
    <Row>
      <Cell>
        {intl.formatMessage(messages.cpu)}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {month.cpu}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {quarter.cpu}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {halfYear.cpu}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {year.cpu}
      </Cell>
    </Row>
    <Row>
      <Cell>
        {intl.formatMessage(messages.memory)}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {month.memory}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {quarter.memory}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {halfYear.memory}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {year.memory}
      </Cell>
    </Row>
    <Row>
      <Cell>
        {intl.formatMessage(messages.price)}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {month.price} €
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {quarter.price} €
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {halfYear.price} €
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {year.price} €
      </Cell>
    </Row>
    <Row>
      <Cell>
        {intl.formatMessage(messages.profitabilityPerHour)}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {month.profitabilityPerHour} €
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {quarter.profitabilityPerHour} €
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {halfYear.profitabilityPerHour} €
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {year.profitabilityPerHour} €
      </Cell>
    </Row>
    <Row>
      <Cell>
        {intl.formatMessage(messages.profitabilityPerDay)}
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {month.profitabilityPerDay} €
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {quarter.profitabilityPerDay} €
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {halfYear.profitabilityPerDay} €
      </Cell>
      <Cell
        align='center'
        color='black400'
      >
        {year.profitabilityPerDay} €
      </Cell>
    </Row>
    <Row>
      <Cell>
        {intl.formatMessage(messages.amount)}
      </Cell>
      <Cell
        align='center'
        color='black400'
        weight='medium'
      >
        {month.amount} €
      </Cell>
      <Cell
        align='center'
        color='black400'
        weight='medium'
      >
        {quarter.amount} €
      </Cell>
      <Cell
        align='center'
        color='black400'
        weight='medium'
      >
        {halfYear.amount} €
      </Cell>
      <Cell
        align='center'
        color='black400'
        weight='medium'
      >
        {year.amount} €
      </Cell>
    </Row>
  </Table>
)

export default injectIntl(ServicePlan)
