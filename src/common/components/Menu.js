import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Row, Layout } from 'flex-layouts'
import { NavLink } from 'avrs-ui/src/link'
import { Divider } from 'avrs-ui/src/divider'
import { Menu as MobileMenu } from 'avrs-ui/src/menu'

const messages = defineMessages({
  main: {
    id: 'nav.main',
    defaultMessage: 'Главная',
  },
  about: {
    id: 'nav.about',
    defaultMessage: 'О продукте',
  },
  capabilities: {
    id: 'nav.capabilities',
    defaultMessage: 'Возможности',
  },
  rates: {
    id: 'nav.rates',
    defaultMessage: 'Тарифы',
  },
  news: {
    id: 'nav.news',
    defaultMessage: 'Новости',
  },
  support: {
    id: 'nav.support',
    defaultMessage: 'Поддержка',
  },
  termOfUse: {
    id: 'nav.term_of_use',
    defaultMessage: 'Условия использования',
  },
  confidentiality: {
    id: 'nav.confidentiality',
    defaultMessage: 'Конфиденциальность',
  },
  company: {
    id: 'nav.company',
    defaultMessage: 'Юридическая инф.',
  },
  products: {
    id: 'nav.products',
    defaultMessage: 'Продукты',
  },
  materials: {
    id: 'nav.materials',
    defaultMessage: 'Материалы',
  },
  login: {
    id: 'nav.login',
    defaultMessage: 'Войти',
  },
  join: {
    id: 'nav.join',
    defaultMessage: 'Стать участником',
  },
})

const Menu = ({ intl, show }) => (
  <MobileMenu show={show}>
    <Row>
      <Layout>
        <NavLink to='/'>
          {intl.formatMessage(messages.main)}
        </NavLink>
      </Layout>
      <Layout basis='12px' />
      <Layout>
        <NavLink to='/about'>
          {intl.formatMessage(messages.about)}
        </NavLink>
      </Layout>
      <Layout basis='12px' />
      <Layout>
        <NavLink to='/?section=capabilities'>
          {intl.formatMessage(messages.capabilities)}
        </NavLink>
      </Layout>
      <Layout basis='12px' />
      <Layout>
        <NavLink to='/service-plans'>
          {intl.formatMessage(messages.rates)}
        </NavLink>
      </Layout>
      <Layout basis='12px' />
      <Layout>
        <NavLink to='/news'>
          {intl.formatMessage(messages.news)}
        </NavLink>
      </Layout>
      <Layout basis='16px' />
      <Layout>
        <Divider />
      </Layout>
      <Layout basis='16px' />
      <Layout>
        <NavLink to='/support'>
          {intl.formatMessage(messages.support)}
        </NavLink>
      </Layout>
      <Layout basis='12px' />
      <Layout>
        <NavLink to='/legal-information/confidentiality'>
          {intl.formatMessage(messages.confidentiality)}
        </NavLink>
      </Layout>
      <Layout basis='12px' />
      <Layout>
        <NavLink to='/legal-information/company'>
          {intl.formatMessage(messages.company)}
        </NavLink>
      </Layout>
      <Layout basis='12px' />
      <Layout>
        <NavLink to='/products'>
          {intl.formatMessage(messages.products)}
        </NavLink>
      </Layout>
      <Layout basis='12px' />
      <Layout>
        <NavLink to='/marketing-materials'>
          {intl.formatMessage(messages.materials)}
        </NavLink>
      </Layout>
      <Layout basis='16px' />
      <Layout>
        <Divider />
      </Layout>
      <Layout basis='16px' />
      <Layout>
        <NavLink to='/service-plans'>
          {intl.formatMessage(messages.join)}
        </NavLink>
      </Layout>
      <Layout basis='12px' />
      <Layout>
        <NavLink to='/service-plans'>
          {intl.formatMessage(messages.login)}
        </NavLink>
      </Layout>
      <Layout basis='24px' />
    </Row>
  </MobileMenu>
)

export default injectIntl(Menu)
