import React from 'react'
import moment from 'moment'
import { defineMessages, injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Link, RouteLink } from 'avrs-ui/src/link'
import { Text } from 'avrs-ui/src/text'
import { Section } from 'avrs-ui/src/section'
import { LogoWhiteMonoWithText } from 'avrs-ui/src/logo'

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
  menu: {
    id: 'footer.menu',
    defaultMessage: 'Меню',
  },
  other: {
    id: 'footer.other',
    defaultMessage: 'Другое',
  },
})

const Footer = ({ intl, newsPreview, onRegister }) => (
  <Section color='black'>
    <Row>
      <Layout basis='40px' />
      <Layout basis='200px'>
        <Column>
          <Layout grow={1} />
          <Layout basis='400px'>
            <Row>
              <Layout>
                <Text
                  color='gray200'
                  size='small'
                  weight='bold'
                >
                  {intl.formatMessage(messages.news).toLowerCase()}
                </Text>
              </Layout>
              <Layout basis='30px' />
              <Layout>
                <RouteLink to={`news/${newsPreview.slug}`}>
                  <Text
                    color='white'
                    size='small'
                  >
                    {newsPreview.title}
                  </Text>
                </RouteLink>
              </Layout>
              <Layout basis='8px' />
              <Layout>
                <Text
                  size='xsmall'
                  color='gray200'
                  lineHeight='extended'
                >
                  {newsPreview.shortDescription}
                </Text>
              </Layout>
              <Layout basis='30px' />
              <Layout>
                <LogoWhiteMonoWithText height={20} />
              </Layout>
              <Layout basis='8px' />
              <Layout>
                <Text
                  color='white'
                  weight='light'
                  size='small'
                >
                  Aversis © {moment().format('YYYY')}
                </Text>
              </Layout>
            </Row>
          </Layout>
          <Layout basis='230px' />
          <Layout basis='210px'>
            <Row>
              <Layout>
                <Text
                  size='small'
                  color='gray200'
                  weight='bold'
                >
                  {intl.formatMessage(messages.menu).toLowerCase()}
                </Text>
              </Layout>
              <Layout basis='30px' />
              <Layout>
                <RouteLink to='about'>
                  <Text
                    size='xsmall'
                    color='white'
                  >
                    {intl.formatMessage(messages.about)}
                  </Text>
                </RouteLink>
              </Layout>
              <Layout basis='4px' />
              <Layout>
                <RouteLink to='/?section=capabilities'>
                  <Text
                    size='xsmall'
                    color='white'
                  >
                    {intl.formatMessage(messages.capabilities)}
                  </Text>
                </RouteLink>
              </Layout>
              <Layout basis='4px' />
              <Layout>
                <RouteLink to='/service-plans'>
                  <Text
                    size='xsmall'
                    color='white'
                  >
                    {intl.formatMessage(messages.rates)}
                  </Text>
                </RouteLink>
              </Layout>
              <Layout basis='4px' />
              <Layout>
                <RouteLink to='/support'>
                  <Text
                    size='xsmall'
                    color='white'
                  >
                    {intl.formatMessage(messages.support)}
                  </Text>
                </RouteLink>
              </Layout>
              <Layout basis='4px' />
              <Layout>
                <Link onClick={onRegister}>
                  <Text
                    size='xsmall'
                    color='white'
                  >
                    {intl.formatMessage(messages.join)}
                  </Text>
                </Link>
              </Layout>
            </Row>
          </Layout>
          <Layout basis='160px'>
            <Row>
              <Layout>
                <Text
                  size='small'
                  color='gray200'
                  weight='bold'
                >
                  {intl.formatMessage(messages.other).toLowerCase()}
                </Text>
              </Layout>
              <Layout basis='30px' />
              <Layout>
                <RouteLink to='/legal-information/confidentiality'>
                  <Text
                    size='xsmall'
                    color='white'
                  >
                    {intl.formatMessage(messages.confidentiality)}
                  </Text>
                </RouteLink>
              </Layout>
              <Layout basis='4px' />
              <Layout>
                <RouteLink to='/marketing-materials'>
                  <Text
                    size='xsmall'
                    color='white'
                  >
                    {intl.formatMessage(messages.materials)}
                  </Text>
                </RouteLink>
              </Layout>
              <Layout basis='4px' />
              <Layout>
                <RouteLink to='/legal-information/company'>
                  <Text
                    size='xsmall'
                    color='white'
                  >
                    {intl.formatMessage(messages.company)}
                  </Text>
                </RouteLink>
              </Layout>
            </Row>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='60px' />
    </Row>
  </Section>
)

export default injectIntl(Footer)
