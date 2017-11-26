import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
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
    <Row>
      <Layout>
        <Block
          offset
          border='hidden'
          fill='transparent'
        >
          <Row>
            <Layout>
              <Column>
                <Layout>
                  <Profit height={50} />
                </Layout>
                <Layout basis='20px' />
                <Layout>
                  <Row>
                    <Layout>
                      <EarnHeader />
                    </Layout>
                    <Layout basis='10px' />
                    <Layout>
                      <EarnTitle small />
                    </Layout>
                  </Row>
                </Layout>
              </Column>
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
        </Block>
      </Layout>
      <Layout>
        <Divider />
      </Layout>
      <Layout>
        <Block
          offset
          border='hidden'
          fill='transparent'
        >
          <Row>
            <Layout>
              <Column>
                <Layout>
                  <Row>
                    <Layout>
                      <InviteHeader />
                    </Layout>
                    <Layout basis='10px' />
                    <Layout>
                      <InviteTitle small />
                    </Layout>
                  </Row>
                </Layout>
                <Layout basis='10px' />
                <Layout>
                  <Referal height={50} />
                </Layout>
              </Column>
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
        </Block>
      </Layout>
      <Layout>
        <Divider />
      </Layout>
      <Layout>
        <Block
          offset
          border='hidden'
          fill='transparent'
        >
          <Row>
            <Layout>
              <Column>
                <Layout>
                  <Exclusive height={50} />
                </Layout>
                <Layout basis='10px' />
                <Layout>
                  <Row>
                    <Layout>
                      <UseHeader />
                    </Layout>
                    <Layout basis='10px' />
                    <Layout>
                      <UseTitle small />
                    </Layout>
                  </Row>
                </Layout>
              </Column>
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
        </Block>
      </Layout>
    </Row>
  </Section>
)

export default Capabilities
