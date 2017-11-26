import React from 'react'
import moment from 'moment'
import { Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text } from 'avrs-ui/src/text'
import { Section } from 'avrs-ui/src/section'
import { LogoWhiteMonoWithText } from 'avrs-ui/src/logo'

const FooterPhone = () => (
  <Section color='black'>
    <Block
      offset
      border='hidden'
      fill='transparent'
    >
      <Row>
        <Layout basis='10px' />
        <Layout>
          <LogoWhiteMonoWithText height={16} />
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
        <Layout basis='10px' />
      </Row>
    </Block>
  </Section>
)

export default FooterPhone
