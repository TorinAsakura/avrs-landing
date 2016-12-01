import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Text } from 'avrs-ui/src/text'

const Company = () => (
  <Row>
    <Layout basis='20px' />
    <Layout>
      <Text
        size='large'
        color='black400'
      >
        AVERS INTELLIGENCE SYSTEM LTD.
      </Text>
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <Text
        color='black400'
        weight='light'
        lineHeight='large'
      >
        Мы являемся официальной компанией, благодаря которой
        Вы можете увеличить свое благосостояние за счёт не использованного ресурса вашего компьютера.
        Наш бизнес строится на отсутствии рисков для наших клиентов и получении им прибыли.
      </Text>
    </Layout>
    <Layout basis='30px' />
    <Layout>
      <Text
        color='black400'
        lineHeight='large'
      >
        AVERS INTELLIGENCE SYSTEM LTD.
      </Text>
    </Layout>
    <Layout>
      <Text
        color='black400'
        weight='light'
        lineHeight='large'
      >
        Trojan House, Top Floor,
      </Text>
    </Layout>
    <Layout>
      <Text
        color='black400'
        weight='light'
        lineHeight='large'
      >
        34  Arcadia Avenue, London,
      </Text>
    </Layout>
    <Layout>
      <Text
        color='black400'
        weight='light'
        lineHeight='large'
      >
        United Kingdom, N3 2JU
      </Text>
    </Layout>
  </Row>
)

export default Company
