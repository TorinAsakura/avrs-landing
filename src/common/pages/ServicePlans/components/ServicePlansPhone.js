import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'
import { Link } from 'avrs-ui/src/link'
import ServicePlan from './ServicePlanPhone'

/* eslint-disable max-len */
const messages = defineMessages({
  title: {
    id: 'service_plans.title',
    defaultMessage: 'Лицензии',
  },
  message: {
    id: 'service_plans.message',
    defaultMessage: 'Оплата лицензии производится один раз до истечения срока подписки. Оплата лицензии и является гарантией выполнения Участником обязательств по предоставлению вычислительных ресурсов ПК в аренду Компании.',
  },
  join: {
    id: 'service_plans.join',
    defaultMessage: 'Стать участником',
  },
  joinMessage: {
    id: 'service_plans.join_message',
    defaultMessage: 'Пройдите регистрацию и начните зарабатывать уже сейчас',
  },
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
})
/* eslint-enable max-len */

const ServicePlans = ({ intl, basis, standart, premium, business, onRegister }) => (
  <Block offset border='hidden'>
    <Row>
      <Layout basis='10px' />
      <Layout>
        <Text
          size='large'
          color='black400'
        >
          {intl.formatMessage(messages.title)}
        </Text>
      </Layout>
      <Layout basis='20px' />
      <Layout>
        <Text
          color='black400'
          weight='light'
          lineHeight='large'
        >
          {intl.formatMessage(messages.message)}
        </Text>
      </Layout>
      <Layout basis='40px' />
      <Layout justify='center'>
        <Text
          size='large'
          color='gray250'
          align='center'
        >
          {intl.formatMessage(messages.basis)}
        </Text>
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <ServicePlan {...basis} />
      </Layout>
      <Layout basis='40px' />
      <Layout justify='center'>
        <Text
          size='large'
          color='blue400'
          align='center'
        >
          {intl.formatMessage(messages.standart)}
        </Text>
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <ServicePlan {...standart} />
      </Layout>
      <Layout basis='40px' />
      <Layout justify='center'>
        <Text
          size='large'
          color='orange500'
          align='center'
        >
          {intl.formatMessage(messages.premium)}
        </Text>
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <ServicePlan {...premium} />
      </Layout>
      <Layout basis='40px' />
      <Layout justify='center'>
        <Text
          size='large'
          color='green500'
          align='center'
        >
          {intl.formatMessage(messages.business)}
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
                    {intl.formatMessage(messages.join)}
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
                  {intl.formatMessage(messages.joinMessage)}
                </Text>
              </Layout>
            </Row>
          </Layout>
        </Column>
      </Layout>
      <Layout basis='50px' />
    </Row>
  </Block>
)

export default injectIntl(ServicePlans)
