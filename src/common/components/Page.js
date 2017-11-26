import React from 'react'
import { Column, Row, Layout, Wrapper } from 'flex-layouts'
import { Initializer as YM } from 'react-yandex-metrika'
import Scroller from './Scroller'
import Header from './Header'
import Footer from './Footer'
import Modals from './Modals'
import Messages from './Messages'

const Page = ({
  children, light, query, pathname, messages, locale, newsPreview,
  onChangeLocale, onCloseModal, onLogin, onRegister, onDismiss,
}) => (
  <Wrapper>
    <Scroller pathname={pathname}>
      <Row>
        <Layout>
          <Modals
            {...query}
            locale={locale}
            onClose={onCloseModal}
          />
        </Layout>
        <Layout>
          <Header
            light={light}
            locale={locale}
            onLogin={onLogin}
            onRegister={onRegister}
            onChangeLocale={onChangeLocale}
          />
        </Layout>
        <Layout>
          <Column>
            <Layout grow={1} />
            <Layout basis='360px'>
              <Messages
                messages={messages}
                onDismiss={onDismiss}
              />
            </Layout>
          </Column>
        </Layout>
        <Layout>
          {children}
        </Layout>
        <Layout>
          <Footer
            newsPreview={newsPreview}
            onRegister={onRegister}
          />
        </Layout>
        <Layout>
          <YM />
        </Layout>
      </Row>
    </Scroller>
  </Wrapper>
)

export default Page
