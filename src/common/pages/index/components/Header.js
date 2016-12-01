import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { LogoWhiteWithText } from 'avrs-ui/src/logo'
import { Button, GhostButton } from 'avrs-ui/src/button'
import { Text } from 'avrs-ui/src/text'
import { HeaderSection } from 'avrs-ui/src/section'
import Head from '../../../components/Header'

const Header = ({ onLogin, onRegister }) => (
  <HeaderSection>
    <Row>
      <Layout>
        <Head
          light
          onLogin={onLogin}
          onRegister={onRegister}
        />
      </Layout>
      <Layout basis='100px' />
      <Layout>
        <Row align='center'>
          <Layout>
            <LogoWhiteWithText height={60} />
          </Layout>
          <Layout basis='30px' />
          <Layout>
            <Text
              color='white'
              size='medium'
            >
              Дайте возможность вашему компьютеру
            </Text>
          </Layout>
          <Layout basis='4px' />
          <Layout>
            <Text
              color='white'
              size='medium'
            >
              принести бо́льшую пользу.
            </Text>
          </Layout>
          <Layout basis='4px' />
        </Row>
      </Layout>
      <Layout basis='100px' />
      <Layout>
        <Column align='center'>
          <Layout grow={1} />
          <Layout>
            <Button
              shadow
              rounded
              color='green'
              onClick={onRegister}
            >
              Стать участником
            </Button>
          </Layout>
          <Layout basis='15px' />
          <Layout>
            <Text color='white'>
              или
            </Text>
          </Layout>
          <Layout basis='15px' />
          <Layout>
            <GhostButton
              rounded
              color='white'
            >
              Узнать подробнее
            </GhostButton>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='60px' />
    </Row>
  </HeaderSection>
)

export default Header
