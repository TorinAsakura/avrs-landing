import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from 'avrs-ui/src/text'
import { Section } from 'avrs-ui/src/section'
import { Profit, Exclusive, Referal } from 'avrs-ui/src/promo'
import { Divider } from 'avrs-ui/src/divider'
import { Link, RouteLink } from 'avrs-ui/src/link'

const Capabilities = () => (
  <Section
    id='capabilities'
    color='gray'
  >
    <Column>
      <Layout grow={1} />
      <Layout basis='900px'>
        <Row>
          <Layout basis='90px' />
          <Layout>
            <Column>
              <Layout basis='65px' />
              <Layout>
                <Profit />
              </Layout>
              <Layout basis='40px' />
              <Layout basis='440px'>
                <Row>
                  <Layout>
                    <Text
                      size='small'
                      color='gray200'
                      weight='medium'
                    >
                      ЗАРАБАТЫВАЙТЕ
                    </Text>
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <Text
                      size='large'
                      color='blue700'
                    >
                      Получение дохода
                    </Text>
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <Text
                      weight='light'
                      size='normal'
                      color='black400'
                    >
                      Мы предлагаем возможность получения дохода от сдачи в аренду
                      свободного вычислительного ресурса своего компьютера.
                      Поступления на ваш счет в течение каждого часа!
                    </Text>
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <Link>
                      <Text color='blue400'>
                        Тарифы
                      </Text>
                    </Link>
                    <Space />
                    <Text color='blue400'>
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
          <Layout basis='100px' />
          <Layout>
            <Column>
              <Layout basis='90px' />
              <Layout basis='440px'>
                <Row>
                  <Layout>
                    <Text
                      size='small'
                      color='gray200'
                      weight='medium'
                    >
                      ПРИГЛАШАЙТЕ
                    </Text>
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <Text
                      color='blue700'
                      size='large'
                    >
                      Реферальная программа
                    </Text>
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <Text
                      size='normal'
                      color='black400'
                      weight='light'
                    >
                      Суть нашей реферальной системы заключается в ее многоуровности.
                      Это означает, что получать прибыль можно не только с клиентов, которых пригласили вы.
                    </Text>
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <Link>
                      <Text color='blue400'>
                        Комиссионные
                      </Text>
                    </Link>
                    <Space />
                    <Text color='blue400'>
                      &#10095;
                    </Text>
                  </Layout>
                </Row>
              </Layout>
              <Layout basis='65px' />
              <Layout>
                <Referal />
              </Layout>
            </Column>
          </Layout>
          <Layout basis='80px' />
          <Layout>
            <Divider />
          </Layout>
          <Layout basis='90px' />
          <Layout>
            <Column>
              <Layout basis='65px' />
              <Layout>
                <Exclusive />
              </Layout>
              <Layout basis='65px' />
              <Layout basis='440px'>
                <Row>
                  <Layout>
                    <Text
                      size='small'
                      color='gray200'
                      weight='medium'
                    >
                      ПОЛЬЗУЙТЕСЬ
                    </Text>
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <Text
                      size='large'
                      color='blue700'
                    >
                      Эксклюзивные продукты
                    </Text>
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <Text
                      size='normal'
                      color='black400'
                      weight='light'
                    >
                      Мы даем возможность получения и использования эксклюзивных продуктов,
                      предлагаемых компанией Aversis Sytems.
                    </Text>
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <RouteLink to='/products'>
                      <Text color='blue400'>
                        Посмотреть
                      </Text>
                    </RouteLink>
                    <Space />
                    <Text color='blue400'>
                      &#10095;
                    </Text>
                  </Layout>
                </Row>
              </Layout>
            </Column>
          </Layout>
          <Layout basis='90px' />
        </Row>
      </Layout>
      <Layout grow={1} />
    </Column>
  </Section>
)

export default Capabilities
