import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Link, RouteLink } from 'avrs-ui/src/link'
import { Text } from 'avrs-ui/src/text'
import { Section } from 'avrs-ui/src/section'
import { LogoWhiteMonoWithText } from 'avrs-ui/src/logo'

const Footer = ({ onRegister }) => (
  <Section color='black'>
    <Row>
      <Layout basis='40px' />
      <Layout basis='200px'>
        <Column>
          <Layout grow={1} />
          <Layout basis='300px'>
            <Row>
              <Layout>
                <Text
                  color='gray200'
                  size='small'
                  weight='bold'
                >
                  НОВОСТИ
                </Text>
              </Layout>
              <Layout basis='30px' />
              <Layout>
                <Text
                  color='white'
                  size='small'
                >
                  Запуск тестовой версии
                </Text>
              </Layout>
              <Layout basis='8px' />
              <Layout>
                <Text
                  size='xsmall'
                  color='gray200'
                  lineHeight='extended'
                >
                  По большому счету, практически каждый из нас не использует
                  потенциал своего компьютера на полную ... Читать далее
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
                  Aversis © 2016
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
                  МЕНЮ
                </Text>
              </Layout>
              <Layout basis='30px' />
              <Layout>
                <RouteLink to='about'>
                  <Text
                    size='xsmall'
                    color='white'
                  >
                    О продукте
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
                    Возможности
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
                    Тарифы
                  </Text>
                </RouteLink>
              </Layout>
              <Layout basis='4px' />
              <Layout>
                <Text
                  size='xsmall'
                  color='white'
                >
                  Поддержка
                </Text>
              </Layout>
              <Layout basis='4px' />
              <Layout>
                <Link onClick={onRegister}>
                  <Text
                    size='xsmall'
                    color='white'
                  >
                    Стать участником
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
                  ДРУГОЕ
                </Text>
              </Layout>
              <Layout basis='30px' />
              <Layout>
                <RouteLink to='/legal-information/terms-of-use'>
                  <Text
                    size='xsmall'
                    color='white'
                  >
                    Условия использования
                  </Text>
                </RouteLink>
              </Layout>
              <Layout basis='4px' />
              <Layout>
                <RouteLink to='/legal-information/confidentiality'>
                  <Text
                    size='xsmall'
                    color='white'
                  >
                    Конфиденциальность
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
                    Материалы
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
                    Юридическая инф.
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

export default Footer
