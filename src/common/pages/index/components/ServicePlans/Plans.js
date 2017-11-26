import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { StyleSheet } from 'elementum'
import { Layout } from 'flex-layouts'
import { PromoServicePlan } from 'avrs-ui/src/ServicePlans'

const messages = defineMessages({
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
  hours: {
    id: 'main.service_plans.hours',
    defaultMessage: 'часов',
  },
  perDay: {
    id: 'main.service_plans.per_day',
    defaultMessage: 'в сутки',
  },
  cpu: {
    id: 'main.service_plans.cpu',
    defaultMessage: 'загрузка CPU',
  },
  memory: {
    id: 'main.service_plans.memory',
    defaultMessage: 'загрузка RAM',
  },
  price: {
    id: 'main.service_plans.price',
    defaultMessage: 'цена',
  },
})

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'row',
  },
  scroll: {
    overflowX: 'auto',
    paddingBottom: '15px',
  },
})


const Plans = ({ intl, scroll, active, basis, standart, premium, business, onChangePlan }) => (
  <div className={styles({ scroll })}>
    <Layout basis='20px' />
    <Layout basis='200px'>
      <PromoServicePlan
        {...basis}
        name={intl.formatMessage(messages.basis)}
        active={active.type === 'basis'}
        onClick={() => onChangePlan('basis')}
        messages={{
          hours: intl.formatMessage(messages.hours),
          perDay: intl.formatMessage(messages.perDay),
          cpu: intl.formatMessage(messages.cpu),
          memory: intl.formatMessage(messages.memory),
          price: intl.formatMessage(messages.price),
        }}
      />
    </Layout>
    <Layout basis='25px' />
    <Layout basis='200px'>
      <PromoServicePlan
        {...standart}
        name={intl.formatMessage(messages.standart)}
        active={active.type === 'standart'}
        onClick={() => onChangePlan('standart')}
        messages={{
          hours: intl.formatMessage(messages.hours),
          perDay: intl.formatMessage(messages.perDay),
          cpu: intl.formatMessage(messages.cpu),
          memory: intl.formatMessage(messages.memory),
          price: intl.formatMessage(messages.price),
        }}
      />
    </Layout>
    <Layout basis='25px' />
    <Layout basis='200px'>
      <PromoServicePlan
        {...premium}
        name={intl.formatMessage(messages.premium)}
        active={active.type === 'premium'}
        onClick={() => onChangePlan('premium')}
        messages={{
          hours: intl.formatMessage(messages.hours),
          perDay: intl.formatMessage(messages.perDay),
          cpu: intl.formatMessage(messages.cpu),
          memory: intl.formatMessage(messages.memory),
          price: intl.formatMessage(messages.price),
        }}
      />
    </Layout>
    <Layout basis='25px' />
    <Layout basis='200px'>
      <PromoServicePlan
        {...business}
        name={intl.formatMessage(messages.business)}
        active={active.type === 'business'}
        onClick={() => onChangePlan('business')}
        messages={{
          hours: intl.formatMessage(messages.hours),
          perDay: intl.formatMessage(messages.perDay),
          cpu: intl.formatMessage(messages.cpu),
          memory: intl.formatMessage(messages.memory),
          price: intl.formatMessage(messages.price),
        }}
      />
    </Layout>
    <Layout basis='20px' />
  </div>
)

export default injectIntl(Plans)
