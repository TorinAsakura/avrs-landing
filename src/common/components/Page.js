import React from 'react'
import { Row, Layout, Wrapper } from 'flex-layouts'
import { Condition } from 'avrs-ui/src/condition'
import Header from './Header'
import Footer from './Footer'
import Modals from './Modals'

const Page = ({ children, header = true, query, onCloseModal, onLogin, onRegister }) => (
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
        {children}
      </Layout>
      <Layout>
        <Footer onRegister={onRegister} />
      </Layout>
    </Row>
  </Wrapper>
)

export default Page
