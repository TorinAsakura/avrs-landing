import React from 'react'
import { defineMessages, injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Section } from 'avrs-ui/src/section'
import { Carousel, Screen } from 'avrs-ui/src/carousel'
import { About, Benefit, Advantage, Target } from 'avrs-ui/src/promo'
import { AboutTitle, AboutMessage } from './slides/messages/About'
import { AdvantageTitle, AdvantageMessage } from './slides/messages/Advantage'
import { BenefitTitle, BenefitMessage } from './slides/messages/Benefit'
import { TargetTitle, TargetMessage } from './slides/messages/Target'
import Links from './slides/Links'

const messages = defineMessages({
  whatItIs: {
    id: 'main.slides.what_it_is',
    defaultMessage: 'Что это такое',
  },
  benefit: {
    id: 'main.slides.benefit',
    defaultMessage: 'Польза Aversis',
  },
  advantage: {
    id: 'main.slides.advantage',
    defaultMessage: 'Преимущества',
  },
  target: {
    id: 'main.slides.target',
    defaultMessage: 'Цель',
  },
})

const Slides = ({ intl }) => (
  <Section id='about'>
    <Column>
      <Layout grow={1} />
      <Layout basis='900px'>
        <Carousel>
          <Screen title={intl.formatMessage(messages.whatItIs)}>
            <Row>
              <Layout basis='80px' />
              <Layout>
                <Column>
                  <Layout basis='40px' />
                  <Layout basis='466px'>
                    <Row>
                      <Layout>
                        <AboutTitle />
                      </Layout>
                      <Layout basis='15px' />
                      <Layout>
                        <AboutMessage />
                      </Layout>
                      <Layout basis='18px' />
                      <Layout>
                        <Links />
                      </Layout>
                    </Row>
                  </Layout>
                  <Layout basis='115px' />
                  <Layout>
                    <About />
                  </Layout>
                  <Layout basis='20px' />
                </Column>
              </Layout>
            </Row>
          </Screen>
          <Screen title={intl.formatMessage(messages.benefit)}>
            <Row>
              <Layout basis='80px' />
              <Layout>
                <Column>
                  <Layout basis='40px' />
                  <Layout basis='470px'>
                    <Row>
                      <Layout>
                        <BenefitTitle />
                      </Layout>
                      <Layout basis='15px' />
                      <Layout>
                        <BenefitMessage />
                      </Layout>
                      <Layout basis='18px' />
                      <Layout>
                        <Links />
                      </Layout>
                    </Row>
                  </Layout>
                  <Layout basis='20px' />
                  <Layout>
                    <Benefit />
                  </Layout>
                  <Layout basis='10px' />
                </Column>
              </Layout>
            </Row>
          </Screen>
          <Screen title={intl.formatMessage(messages.advantage)}>
            <Row>
              <Layout basis='80px' />
              <Layout>
                <Column>
                  <Layout basis='40px' />
                  <Layout basis='490px'>
                    <Row>
                      <Layout>
                        <AdvantageTitle />
                      </Layout>
                      <Layout basis='15px' />
                      <Layout>
                        <AdvantageMessage />
                      </Layout>
                      <Layout basis='18px' />
                      <Layout>
                        <Links />
                      </Layout>
                    </Row>
                  </Layout>
                  <Layout basis='45px' />
                  <Layout>
                    <Advantage />
                  </Layout>
                  <Layout basis='20px' />
                </Column>
              </Layout>
            </Row>
          </Screen>
          <Screen title={intl.formatMessage(messages.target)}>
            <Row>
              <Layout basis='80px' />
              <Layout>
                <Column>
                  <Layout basis='40px' />
                  <Layout basis='426px'>
                    <Row>
                      <Layout>
                        <TargetTitle />
                      </Layout>
                      <Layout basis='15px' />
                      <Layout>
                        <TargetMessage />
                      </Layout>
                      <Layout basis='18px' />
                      <Layout>
                        <Links />
                      </Layout>
                    </Row>
                  </Layout>
                  <Layout basis='50px' />
                  <Layout>
                    <Target />
                  </Layout>
                  <Layout basis='20px' />
                </Column>
              </Layout>
            </Row>
          </Screen>
        </Carousel>
      </Layout>
      <Layout grow={1} />
    </Column>
  </Section>
)

export default injectIntl(Slides)
