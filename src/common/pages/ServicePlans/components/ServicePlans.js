import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from 'avrs-ui/src/text'
import { Link } from 'avrs-ui/src/link'
import ServicePlan from './ServicePlan'

const ServicePlans = ({ basis, standard, premium, business, onRegister }) => (
  <Column>
    <Layout grow={1} />
    <Layout basis='700px'>
      <Row>
        <Layout basis='90px' />
        <Layout>
          <Text
            size='large'
            color='black400'
          >
            Лицензии
          </Text>
        </Layout>
        <Layout basis='20px' />
        <Layout>
          <Text
            color='black400'
            weight='light'
            lineHeight='large'
          >
            Оплата лицензии производится один раз до истечения срока подписки.
            Оплата лицензии и является гарантией выполнения Участником обязательств
            по предоставлению вычислительных ресурсов ПК в аренду Компании.
          </Text>
        </Layout>
        <Layout basis='40px' />
        <Layout justify='center'>
          <Text
            size='large'
            color='gray250'
            align='center'
          >
            Базис
          </Text>
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <ServicePlan {...basis} />
        </Layout>
        <Layout basis='100px' />
        <Layout justify='center'>
          <Text
            size='large'
            color='blue400'
            align='center'
          >
            Стандарт
          </Text>
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <ServicePlan {...standard} />
        </Layout>
        <Layout basis='100px' />
        <Layout justify='center'>
          <Text
            size='large'
            color='orange500'
            align='center'
          >
            Премиум
          </Text>
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <ServicePlan {...premium} />
        </Layout>
        <Layout basis='100px' />
        <Layout justify='center'>
          <Text
            size='large'
            color='green500'
            align='center'
          >
            Бизнес
          </Text>
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <ServicePlan {...business} />
        </Layout>
        <Layout basis='40px' />
        <Layout>
          <Column>
            <Layout grow={1} />
            <Layout basis='240px'>
              <Row>
                <Layout>
                  <Link onClick={onRegister}>
                    <Text
                      size='small'
                      color='blue400'
                    >
                      Стать участником
                    </Text>
                  </Link>
                  <Space />
                  <Text
                    size='small'
                    color='blue400'
                    lineHeight='extended'
                  >
                    &#10095;
                  </Text>
                </Layout>
                <Layout basis='8px' />
                <Layout>
                  <Text
                    size='small'
                    color='gray300'
                    weight='light'
                    lineHeight='extended'
                  >
                    Пройдите регистрацию и начните зарабатывать уже сейчас
                  </Text>
                </Layout>
              </Row>
            </Layout>
          </Column>
        </Layout>
        <Layout basis='50px' />
      </Row>
    </Layout>
    <Layout grow={1} />
  </Column>
)

export default ServicePlans
