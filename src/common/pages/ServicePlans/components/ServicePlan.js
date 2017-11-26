import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Table, Row as TableRow, Cell } from 'avrs-ui/src/table'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'
import { Divider } from 'avrs-ui/src/divider'
import { Link } from 'avrs-ui/src/link'

const messages = defineMessages({
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
  subscription: {
    id: 'service_plans.plan.subscription',
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
  buy: {
    id: 'service_plans.plan.buy',
    defaultMessage: 'Зарегистрироваться и купить',
  },
})

const ServicePlan = ({
  intl, active, color, type, month, quarter, halfYear,
  year, onMonth, onQuarter, onHalfYear, onYear, onOpenProduct,
}) => (
  <Block shadow>
    <Row>
      <Layout basis='40px' />
      <Layout justify='center'>
        <Text
          size='large'
          color={color}
          align='center'
        >
          {intl.formatMessage(messages[type])}
        </Text>
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <Column>
          <Layout grow={1} />
          <Layout basis='650px'>
            <Table>
              <colgroup>
                <col style={{ width: '36%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '18%' }} />
              </colgroup>
              <TableRow>
                <Cell>
                  {intl.formatMessage(messages.subscription)}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  onClick={onMonth}
                >
                  <Text
                    size='small'
                    color={(active && active.period === 30) ? 'blue400' : 'gray400'}
                  >
                    {intl.formatMessage(messages.period, { period: 30 })}
                  </Text>
                </Cell>
                <Cell
                  selectable
                  align='center'
                  onClick={onQuarter}
                >
                  <Text
                    size='small'
                    color={(active && active.period === 90) ? 'blue400' : 'gray400'}
                  >
                    {intl.formatMessage(messages.period, { period: 90 })}
                  </Text>
                </Cell>
                <Cell
                  selectable
                  align='center'
                  onClick={onHalfYear}
                >
                  <Text
                    size='small'
                    color={(active && active.period === 180) ? 'blue400' : 'gray400'}
                  >
                    {intl.formatMessage(messages.period, { period: 180 })}
                  </Text>
                </Cell>
                <Cell
                  selectable
                  align='center'
                  onClick={onYear}
                >
                  <Text
                    size='small'
                    color={(active && active.period === 365) ? 'blue400' : 'gray400'}
                  >
                    {intl.formatMessage(messages.period, { period: 365 })}
                  </Text>
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>
                  {intl.formatMessage(messages.time)}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onMonth}
                >
                  {month.time}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onQuarter}
                >
                  {quarter.time}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onHalfYear}
                >
                  {halfYear.time}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onYear}
                >
                  {year.time}
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>
                  {intl.formatMessage(messages.cpu)}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onMonth}
                >
                  {month.cpu}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onQuarter}
                >
                  {quarter.cpu}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onHalfYear}
                >
                  {halfYear.cpu}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onYear}
                >
                  {year.cpu}
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>
                  {intl.formatMessage(messages.memory)}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onMonth}
                >
                  {month.memory}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onQuarter}
                >
                  {quarter.memory}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onHalfYear}
                >
                  {halfYear.memory}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onYear}
                >
                  {year.memory}
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>
                  {intl.formatMessage(messages.price)}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onMonth}
                >
                  {month.price} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onQuarter}
                >
                  {quarter.price} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onHalfYear}
                >
                  {halfYear.price} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onYear}
                >
                  {year.price} €
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>
                  {intl.formatMessage(messages.profitabilityPerHour)}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onMonth}
                >
                  {month.profitabilityPerHour} €
                </Cell>
                <Cell
                  align='center'
                  color='black400'
                  onClick={onQuarter}
                >
                  {quarter.profitabilityPerHour} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onHalfYear}
                >
                  {halfYear.profitabilityPerHour} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onYear}
                >
                  {year.profitabilityPerHour} €
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>
                  {intl.formatMessage(messages.profitabilityPerDay)}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onMonth}
                >
                  {month.profitabilityPerDay} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onQuarter}
                >
                  {quarter.profitabilityPerDay} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onHalfYear}
                >
                  {halfYear.profitabilityPerDay} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  onClick={onYear}
                >
                  {year.profitabilityPerDay} €
                </Cell>
              </TableRow>
              <TableRow>
                <Cell>
                  {intl.formatMessage(messages.amount)}
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  weight='medium'
                  selected={active && active.period === 30}
                  onClick={onMonth}
                >
                  {month.amount} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  weight='medium'
                  selected={active && active.period === 90}
                  onClick={onQuarter}
                >
                  {quarter.amount} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  weight='medium'
                  selected={active && active.period === 180}
                  onClick={onHalfYear}
                >
                  {halfYear.amount} €
                </Cell>
                <Cell
                  selectable
                  align='center'
                  color='black400'
                  weight='medium'
                  selected={active && active.period === 365}
                  onClick={onYear}
                >
                  {year.amount} €
                </Cell>
              </TableRow>
            </Table>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='60px' />
      <Layout>
        <Divider />
      </Layout>
      <Layout basis='15px' />
      <Layout>
        <Column>
          <Layout grow={1} />
          <Layout>
            <Link onClick={onOpenProduct}>
              <Text
                color='blue400'
                size='small'
              >
                {intl.formatMessage(messages.buy)}
              </Text>
            </Link>
            <Space />
            <Text
              color='blue400'
              size='small'
            >
              &#10095;
            </Text>
          </Layout>
          <Layout basis='25px' />
        </Column>
      </Layout>
      <Layout basis='15px' />
    </Row>
  </Block>
)

export default injectIntl(ServicePlan)
