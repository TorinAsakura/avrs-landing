import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from 'avrs-ui/src/text'
import { Divider } from 'avrs-ui/src/divider'
import { Link } from 'avrs-ui/src/link'
import { Exclusive } from 'avrs-ui/src/promo'
import PrepaidCard from './PrepaidCard'

const Products = ({ onRegister }) => (
  <Column>
    <Layout grow={1} />
    <Layout basis='900px'>
      <Row>
        <Layout basis='90px' />
        <Layout>
          <Column>
            <Layout basis='90px' />
            <Layout>
              <Exclusive />
            </Layout>
            <Layout basis='35px' />
            <Layout basis='410px'>
              <Row>
                <Layout basis='40px' />
                <Layout>
                  <Text
                    color='blue400'
                    size='large'
                  >
                    Aversis Software
                  </Text>
                </Layout>
                <Layout basis='12px' />
                <Layout>
                  <Text weight='light'>
                    Основным продуктом компании является уникальное приложение,
                    которое способно объединить ресурс всех пользователей
                    и распределить их далее в соответствии с запросами.
                  </Text>
                </Layout>
                <Layout basis='8px' />
                <Layout>
                  <Link onClick={onRegister}>
                    <Text
                      size='small'
                      color='blue400'
                    >
                      Регистрация
                    </Text>
                  </Link>
                  <Space />
                  <Text
                    color='blue400'
                    size='small'
                    lineHeight='extended'
                  >
                    &#10095;
                  </Text>
                </Layout>
              </Row>
            </Layout>
          </Column>
        </Layout>
        <Layout basis='60px' />
        <Layout>
          <Divider />
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <Column>
            <Layout>
              <PrepaidCard />
            </Layout>
            <Layout basis='410px'>
              <Row>
                <Layout basis='100px' />
                <Layout>
                  <Text
                    color='blue400'
                    size='large'
                  >
                    Aversis Prepaid Card
                  </Text>
                </Layout>
                <Layout basis='12px' />
                <Layout>
                  <Text weight='light'>
                    Для удобства расчёта с нашими клиентами мы предлагаем Aversis Mastercard
                  </Text>
                </Layout>
                <Layout basis='8px' />
                <Layout>
                  <Link onClick={onRegister}>
                    <Text
                      size='small'
                      color='blue400'
                    >
                      Регистрация
                    </Text>
                  </Link>
                  <Space />
                  <Text
                    color='blue400'
                    size='small'
                    lineHeight='extended'
                  >
                    &#10095;
                  </Text>
                </Layout>
              </Row>
            </Layout>
          </Column>
        </Layout>
        <Layout basis='60px' />
      </Row>
    </Layout>
    <Layout grow={1} />
  </Column>
)

export default Products
