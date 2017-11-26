import React from 'react'
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl'
import { StyleSheet } from 'elementum'
import { Row, Layout } from 'flex-layouts'
import { Text } from 'avrs-ui/src/text'
import { PointerLink, RouteLink } from 'avrs-ui/src/link'
import ScrollToTop from './ScrollToTop'

const messages = defineMessages({
  common: {
    id: 'about.summary.common',
    defaultMessage: 'Основные',
  },
  about: {
    id: 'about.summary.about',
    defaultMessage: 'Что такое Aversis?',
  },
  whatYouNeed: {
    id: 'about.summary.what_you_need',
    defaultMessage: 'Для чего это нужно?',
  },
  advantages: {
    id: 'about.summary.advantages',
    defaultMessage: 'Какие преимущества?',
  },
  capabilities: {
    id: 'about.summary.capabilities',
    defaultMessage: 'Какие возможности?',
  },
  target: {
    id: 'about.summary.target',
    defaultMessage: 'Какая наша цель?',
  },
  join: {
    id: 'about.summary.join',
    defaultMessage: 'Как стать участником?',
  },
  income: {
    id: 'about.summary.income',
    defaultMessage: 'Как мне получать доход?',
  },
  carrier: {
    id: 'about.summary.carrier',
    defaultMessage: 'Условия карьеры',
  },
  inviteMembers: {
    id: 'about.summary.invite_members',
    defaultMessage: 'Приглашение участников',
  },
  products: {
    id: 'about.summary.products',
    defaultMessage: 'Продукты компании',
  },
  requirements: {
    id: 'about.summary.requirements',
    defaultMessage: 'Требования для ПК',
  },
  referal: {
    id: 'about.summary.referal',
    defaultMessage: 'Реферальная программа',
  },
  security: {
    id: 'about.summary.security',
    defaultMessage: 'Безопасность',
  },
  confidence: {
    id: 'about.summary.confidence',
    defaultMessage: 'Почему я могу вам доверять?',
  },
  hack: {
    id: 'about.summary.hack',
    defaultMessage: 'Могут ли меня взломать?',
  },
  twoStepAuth: {
    id: 'about.summary.two_step_auth',
    defaultMessage: 'Двухэтапная авторизация',
  },
  account: {
    id: 'about.summary.account',
    defaultMessage: 'Аккаунт',
  },
  registration: {
    id: 'about.summary.registration',
    defaultMessage: 'Регистрация',
  },
  conclusion: {
    id: 'about.summary.conclusion_of_an_agreement',
    defaultMessage: 'Заключение соглашения',
  },
  termination: {
    id: 'about.summary.termination',
    defaultMessage: 'Расторжение соглашения',
  },
  changeData: {
    id: 'about.summary.change_data',
    defaultMessage: 'Изменение данных',
  },
  payment: {
    id: 'about.summary.payment',
    defaultMessage: 'Оплата лицензии',
  },
  withdrawal: {
    id: 'about.summary.withdrawal',
    defaultMessage: 'Вывод средств',
  },
  info: {
    id: 'legal_information.summary.info',
    defaultMessage: 'Для получения дополнительной информации или справки посетите страницу {support} Aversis.',
  },
  support: {
    id: 'legal_information.summary.support',
    defaultMessage: 'службы поддержки',
  },
})

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRight: '1px solid #E5E5E5',
    boxSizing: 'border-box',
    padding: '20px 30px 40px 0px',
    marginBottom: '20px',
    position: 'relative',
    boxShadow: 'inset -4px 0 4px -4px rgba(0,0,0,0.09)',
  },
})

const Summary = ({ intl }) => (
  <div className={styles()}>
    <Row>
      <Layout>
        <Text
          size='small'
          color='black400'
          weight='medium'
        >
          {intl.formatMessage(messages.common)}
        </Text>
      </Layout>
      <Layout basis='2px' />
      <Layout>
        <PointerLink to='/about'>
          {intl.formatMessage(messages.about)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/what-you-need'>
          {intl.formatMessage(messages.whatYouNeed)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/advantages'>
          {intl.formatMessage(messages.advantages)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/capabilities'>
          {intl.formatMessage(messages.capabilities)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/target'>
          {intl.formatMessage(messages.target)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/join'>
          {intl.formatMessage(messages.join)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/income'>
          {intl.formatMessage(messages.income)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/carrier'>
          {intl.formatMessage(messages.carrier)}
        </PointerLink>
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <Text
          size='small'
          color='black400'
          weight='medium'
        >
          Aversis
        </Text>
      </Layout>
      <Layout basis='2px' />
      <Layout>
        <PointerLink to='/about/invite-members'>
          {intl.formatMessage(messages.inviteMembers)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/products'>
          {intl.formatMessage(messages.products)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/requirements'>
          {intl.formatMessage(messages.requirements)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/referal'>
          {intl.formatMessage(messages.referal)}
        </PointerLink>
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <Text
          size='small'
          color='black400'
          weight='medium'
        >
          {intl.formatMessage(messages.security)}
        </Text>
      </Layout>
      <Layout basis='2px' />
      <Layout>
        <PointerLink to='/about/confidence'>
          {intl.formatMessage(messages.confidence)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/hack'>
          {intl.formatMessage(messages.hack)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/two-step-auth'>
          {intl.formatMessage(messages.twoStepAuth)}
        </PointerLink>
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <Text
          size='small'
          color='black400'
          weight='medium'
        >
          {intl.formatMessage(messages.account)}
        </Text>
      </Layout>
      <Layout basis='2px' />
      <Layout>
        <PointerLink to='/about/registration'>
          {intl.formatMessage(messages.registration)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/conclusion-of-an-agreement'>
          {intl.formatMessage(messages.conclusion)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/termination'>
          {intl.formatMessage(messages.termination)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/change-data'>
          {intl.formatMessage(messages.changeData)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/payment'>
          {intl.formatMessage(messages.payment)}
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/withdrawal'>
          {intl.formatMessage(messages.withdrawal)}
        </PointerLink>
      </Layout>
      <Layout basis='60px' />
      <Layout>
        <Text
          size='small'
          color='gray250'
          weight='light'
          lineHeight='extended'
        >
          <FormattedMessage
            {...messages.info}
            values={{
              support: (
                <RouteLink to='/support'>
                  <Text
                    size='small'
                    color='blue400'
                    weight='light'
                    lineHeight='extended'
                  >
                    {intl.formatMessage(messages.support)}
                  </Text>
                </RouteLink>
              ),
            }}
          />
        </Text>
      </Layout>
      <Layout basis='20px' />
      <Layout grow={1}>
        <ScrollToTop />
      </Layout>
    </Row>
  </div>
)

export default injectIntl(Summary)
