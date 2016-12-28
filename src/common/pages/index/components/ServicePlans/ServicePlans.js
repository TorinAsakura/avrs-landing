import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Text } from 'avrs-ui/src/text'
import { Section } from 'avrs-ui/src/section'
import { PromoServicePlan } from 'avrs-ui/src/ServicePlans'
import Calculator from './Calculator'

const ServicePlans = ({ active, period, onChangePlan, onChangePeriod }) => (
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
                  time={10}
                  type='basis'
                  name='Базис'
                  price='До 0,14 €'
                  priceUnit='в час'
                  timeUnit='в сутки'
                  onClick={() => onChangePlan('basis')}
                />
              </Layout>
              <Layout basis='25px' />
              <Layout basis='200px'>
                <PromoServicePlan
                  active={active.type === 'standart'}
                  time={12}
                  type='standart'
                  name='Стандарт'
                  price='До 0,25 €'
                  priceUnit='в час'
                  timeUnit='в сутки'
                  onClick={() => onChangePlan('standart')}
                />
              </Layout>
              <Layout basis='25px' />
              <Layout basis='200px'>
                <PromoServicePlan
                  active={active.type === 'premium'}
                  time={15}
                  type='premium'
                  name='Премиум'
                  price='До 0,59 €'
                  priceUnit='в час'
                  timeUnit='в сутки'
                  onClick={() => onChangePlan('premium')}
                />
              </Layout>
              <Layout basis='25px' />
              <Layout basis='200px'>
                <PromoServicePlan
                  active={active.type === 'business'}
                  time={20}
                  hideRightBorder
                  type='business'
                  name='Бизнес'
                  price='До 0,74 €'
                  priceUnit='в час'
                  timeUnit='в сутки'
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
