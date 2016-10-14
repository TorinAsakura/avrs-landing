import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Section } from 'avrs-ui/src/section'
import { Text } from 'avrs-ui/src/text'

const Header = () => (
  <Section color='gray'>
    <Column>
      <Layout basis='110px' />
      <Layout>
        <Row>
          <Layout basis='30px' />
          <Layout>
            <Text
              size='large'
              color='gray250'
            >
              Подробнее о нашем продукте
            </Text>
          </Layout>
          <Layout basis='4px' />
          <Layout>
            <Text
              weight='light'
              color='gray250'
            >
              Часто задаваемые вопросы
            </Text>
          </Layout>
          <Layout basis='30px' />
        </Row>
      </Layout>
    </Column>
  </Section>
)

export default Header
