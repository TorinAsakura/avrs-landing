import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Section } from 'avrs-ui/src/section'
import { Profit, Exclusive, Referal } from 'avrs-ui/src/promo'
import { Divider } from 'avrs-ui/src/divider'
import { EarnHeader, EarnTitle, EarnMessage, EarnLink } from './capabilities/Earn'
import { InviteHeader, InviteTitle, InviteMessage, InviteLink } from './capabilities/Invite'
import { UseHeader, UseTitle, UseMessage, UseLink } from './capabilities/Use'

const Capabilities = () => (
  <Section
    id='capabilities'
    color='gray'
  >
    <Column>
      <Layout grow={1} />
      <Layout basis='900px'>
        <Row>
          <Layout basis='90px' />
          <Layout>
            <Column>
              <Layout basis='65px' />
              <Layout>
                <Profit />
              </Layout>
              <Layout basis='40px' />
              <Layout basis='440px'>
                <Row>
                  <Layout>
                    <EarnHeader />
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <EarnTitle />
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <EarnMessage />
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <EarnLink />
                  </Layout>
                </Row>
              </Layout>
            </Column>
          </Layout>
          <Layout basis='60px' />
          <Layout>
            <Divider />
          </Layout>
          <Layout basis='100px' />
          <Layout>
            <Column>
              <Layout basis='90px' />
              <Layout basis='440px'>
                <Row>
                  <Layout>
                    <InviteHeader />
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <InviteTitle />
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <InviteMessage />
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <InviteLink />
                  </Layout>
                </Row>
              </Layout>
              <Layout basis='65px' />
              <Layout>
                <Referal />
              </Layout>
            </Column>
          </Layout>
          <Layout basis='80px' />
          <Layout>
            <Divider />
          </Layout>
          <Layout basis='90px' />
          <Layout>
            <Column>
              <Layout basis='65px' />
              <Layout>
                <Exclusive />
              </Layout>
              <Layout basis='65px' />
              <Layout basis='440px'>
                <Row>
                  <Layout>
                    <UseHeader />
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <UseTitle />
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <UseMessage />
                  </Layout>
                  <Layout basis='15px' />
                  <Layout>
                    <UseLink />
                  </Layout>
                </Row>
              </Layout>
            </Column>
          </Layout>
          <Layout basis='90px' />
        </Row>
      </Layout>
      <Layout grow={1} />
    </Column>
  </Section>
)

export default Capabilities
