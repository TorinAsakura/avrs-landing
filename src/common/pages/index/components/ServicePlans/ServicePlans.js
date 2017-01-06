import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Text } from 'avrs-ui/src/text'
import { Section } from 'avrs-ui/src/section'
import { PromoServicePlan } from 'avrs-ui/src/ServicePlans'
import Calculator from './Calculator'

const ServicePlans = ({ active, period, basis, standart, premium, business, onChangePlan, onChangePeriod }) => (
  <Section id='service-plans'>
    <Column>
      <Layout grow={1} />
      <Layout basis='875px'>
        <Row>
          <Layout basis='100px' />
          <Layout>
            <Column>
              <Layout grow={1} />
              <Layout>
                <Text
                  size='large'
                  color='black400'
                >
                  Самостоятельный выбор лицензии
                </Text>
              </Layout>
              <Layout grow={1} />
            </Column>
          </Layout>
          <Layout basis='10px' />
          <Layout>
            <Column>
              <Layout grow={1} />
              <Layout basis='580px'>
                <Text
                  weight='light'
                  color='black400'
                  align='center'
                  lineHeight='extended'
                >
                  Минимальное время нахождения компьютера,
                  подключенного к программе Aversis в сети,
                  напрямую зависит от приобретенного пакета.
                </Text>
              </Layout>
              <Layout grow={1} />
            </Column>
          </Layout>
          <Layout basis='65px' />
          <Layout>
            <Column>
              <Layout basis='200px'>
                <PromoServicePlan
                  active={active.type === 'basis'}
                  name='Базис'
                  {...basis}
                  onClick={() => onChangePlan('basis')}
                />
              </Layout>
              <Layout basis='25px' />
              <Layout basis='200px'>
                <PromoServicePlan
                  active={active.type === 'standart'}
                  name='Стандарт'
                  {...standart}
                  onClick={() => onChangePlan('standart')}
                />
              </Layout>
              <Layout basis='25px' />
              <Layout basis='200px'>
                <PromoServicePlan
                  active={active.type === 'premium'}
                  name='Премиум'
                  {...premium}
                  onClick={() => onChangePlan('premium')}
                />
              </Layout>
              <Layout basis='25px' />
              <Layout basis='200px'>
                <PromoServicePlan
                  active={active.type === 'business'}
                  name='Бизнес'
                  {...business}
                  onClick={() => onChangePlan('business')}
                />
              </Layout>
            </Column>
          </Layout>
          <Layout basis='70px' />
          <Layout>
            <Column>
              <Layout grow={1} />
              <Layout basis='200px'>
                <Text
                  size='large'
                  color='gray200'
                >
                  Ваш заработок:
                </Text>
              </Layout>
              <Layout basis='300px'>
                <Calculator
                  plan={active}
                  period={period}
                  onChange={onChangePeriod}
                />
              </Layout>
              <Layout grow={1} />
            </Column>
          </Layout>
          <Layout basis='70px' />
        </Row>
      </Layout>
      <Layout grow={1} />
    </Column>
  </Section>
)

export default ServicePlans
