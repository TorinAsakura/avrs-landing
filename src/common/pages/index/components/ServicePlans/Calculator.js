import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Text, Space } from 'avrs-ui/src/text'
import { Slider } from 'avrs-ui/src/slider'

const names = {
  Basis: 'Базис',
  Standard: 'Стандарт',
  Premium: 'Премиум',
  Business: 'Бизнес',
}

const Calculator = ({ plan, period = 90, onChange }) => (
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
        С тарифом
      </Text>
      <Space />
      <Text
        color='blue400'
        size='small'
      >
        {names[plan.name]}
      </Text>
      <Space />
      <Text
        color='gray250'
        size='small'
      >
        за
      </Text>
      <Space />
      <Text
        color='blue400'
        size='small'
      >
        {period} дней
      </Text>
      <Space />
      <Text
        color='gray250'
        size='small'
      >
        подписки
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

export default Calculator
