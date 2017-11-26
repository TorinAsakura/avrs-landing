import React from 'react'
import { Row, Layout, Wrapper } from 'flex-layouts'
import { Initializer as YM } from 'react-yandex-metrika'
import Scroller from './Scroller'
import Header from './HeaderPhone'
import Footer from './FooterPhone'
import Menu from './Menu'
import Modals from './Modals'

const PagePhone = ({
  children, query, pathname, light, showMenu, locale,
  onChangeLocale, onShowMenu, onHideMenu, onCloseModal,
}) => (
  <Row fill>
    <Layout>
      <Modals
        authSize
        {...query}
        locale={locale}
        onClose={onCloseModal}
      />
    </Layout>
    <Layout>
      <Menu show={showMenu} />
    </Layout>
    <Layout>
      <Header
        light={light}
        locale={locale}
        showMenu={showMenu}
        onShowMenu={onShowMenu}
        onHideMenu={onHideMenu}
        onChangeLocale={onChangeLocale}
      />
    </Layout>
    <Layout grow={1}>
      <Wrapper fillHeight={false}>
        <Scroller
          native
          pathname={pathname}
        >
          {children}
        </Scroller>
        <Footer />
      </Wrapper>
    </Layout>
    <Layout>
      <YM />
    </Layout>
  </Row>
)

export default PagePhone
