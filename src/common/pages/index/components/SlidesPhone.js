import React from 'react'
import { Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { About, Benefit, Advantage, Target } from 'avrs-ui/src/promo'
import { Divider } from 'avrs-ui/src/divider'
import { AboutTitle, AboutMessage } from './slides/messages/About'
import { AdvantageTitle, AdvantageMessage } from './slides/messages/Advantage'
import { BenefitTitle, BenefitMessage } from './slides/messages/Benefit'
import { TargetTitle, TargetMessage } from './slides/messages/Target'
import Links from './slides/Links'

const Slides = () => (
  <Row>
    <Layout>
      <Block offset border='hidden'>
        <Row>
          <Layout>
            <AboutTitle />
          </Layout>
          <Layout basis='15px' />
          <Layout justify='center'>
            <About height={200} />
          </Layout>
          <Layout basis='25px' />
          <Layout>
            <AboutMessage />
          </Layout>
          <Layout basis='18px' />
          <Layout>
            <Links small />
          </Layout>
        </Row>
      </Block>
    </Layout>
    <Layout>
      <Divider />
    </Layout>
    <Layout>
      <Block offset border='hidden'>
        <Row>
          <Layout>
            <BenefitTitle />
          </Layout>
          <Layout basis='15px' />
          <Layout justify='center'>
            <Benefit height={200} />
          </Layout>
          <Layout basis='25px' />
          <Layout>
            <BenefitMessage />
          </Layout>
          <Layout basis='18px' />
          <Layout>
            <Links small />
          </Layout>
        </Row>
      </Block>
    </Layout>
    <Layout>
      <Divider />
    </Layout>
    <Layout>
      <Block offset border='hidden'>
        <Row>
          <Layout>
            <AdvantageTitle />
          </Layout>
          <Layout basis='15px' />
          <Layout justify='center'>
            <Advantage height={200} />
          </Layout>
          <Layout basis='25px' />
          <Layout>
            <AdvantageMessage />
          </Layout>
          <Layout basis='18px' />
          <Layout>
            <Links small />
          </Layout>
        </Row>
      </Block>
    </Layout>
    <Layout>
      <Divider />
    </Layout>
    <Layout>
      <Block offset border='hidden'>
        <Row>
          <Layout>
            <TargetTitle />
          </Layout>
          <Layout basis='15px' />
          <Layout justify='center'>
            <Target height={200} />
          </Layout>
          <Layout basis='25px' />
          <Layout>
            <TargetMessage />
          </Layout>
          <Layout basis='18px' />
          <Layout>
            <Links small />
          </Layout>
        </Row>
      </Block>
    </Layout>
  </Row>
)

export default Slides
