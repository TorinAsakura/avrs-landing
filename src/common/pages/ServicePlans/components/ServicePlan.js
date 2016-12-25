import React from 'react'
import { Table, Row, Cell } from 'avrs-ui/src/table'

const ServicePlan = ({ month, quarter, halfYear, year }) => (
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
        Подписка
      </Cell>
      <Cell align='center'>
        30 Дней
      </Cell>
      <Cell align='center'>
        90 Дней
      </Cell>
      <Cell align='center'>
        180 Дней
      </Cell>
      <Cell align='center'>
        365 Дней
      </Cell>
    </Row>
    <Row>
      <Cell>
        Аренда часов в сутки
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
        Загрузка CPU
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
        Загрузка RAM
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
        Стоимость лицензии
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
        Рентабельность в час
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
        Рентабельность в день
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
        Общая сумма на выплату
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

export default ServicePlan
