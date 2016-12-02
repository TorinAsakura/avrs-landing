import React from 'react'
import { Column, Row, Layout, Wrapper } from 'flex-layouts'
import { Condition } from 'avrs-ui/src/condition'
import Header from './Header'
import Footer from './Footer'
import Modals from './Modals'
import Messages from './Messages'

const Page = ({ children, header = true, query, messages, onCloseModal, onLogin, onRegister, onDismiss }) => (
  <Wrapper>
    <Row>
      <Layout>
        <Modals
          {...query}
          onClose={onCloseModal}
        />
      </Layout>
      <Condition match={header}>
        <Layout>
          <Header
            onLogin={onLogin}
            onRegister={onRegister}
          />
        </Layout>
      </Condition>
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
        <Footer onRegister={onRegister} />
      </Layout>
    </Row>
  </Wrapper>
)

export default Page
