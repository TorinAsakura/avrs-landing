import React from 'react'
import { Link as RouteLink } from 'react-router'
import { StyleSheet } from 'elementum'
import { Column, Row, Layout } from 'flex-layouts'
import { Logo, LogoWhite } from 'avrs-ui/src/logo'
import { Condition } from 'avrs-ui/src/condition'
import { Divider } from 'avrs-ui/src/divider'
import { Link } from 'avrs-ui/src/link'
import { Locale } from 'avrs-ui/src/locale'
import { MenuIcon } from 'avrs-ui/src/menu'

const styles = StyleSheet.create({
  self: {
    width: '100%',
  },
  light: {
    background: '#1c5d98',
    backgroundImage: `
url(data:image/png;base64,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
/wuqcXY47QILbgAAAABJRU5ErkJggg==), 
linear-gradient(to bottom, #1c5d98 0%,#1c5d98 100%)`.replace(/\n/g, ''),
  },
})

const HeaderPhone = ({ light, showMenu, locale, onChangeLocale, onShowMenu, onHideMenu }) => (
  <div className={styles({ light })}>
    <Row>
      <Layout basis='15px' />
      <Layout>
        <Column align='center'>
          <Layout basis='15px' />
          <Layout>
            <RouteLink to='/'>
              <Condition match={!light}>
                <Logo height={20} />
              </Condition>
              <Condition match={light}>
                <LogoWhite height={20} />
              </Condition>
            </RouteLink>
          </Layout>
          <Layout grow={1} />
          <Layout>
            <Locale
              short
              current={locale}
              onChange={onChangeLocale}
            />
          </Layout>
          <Layout basis='20px' />
          <Layout overflow>
            <Link onClick={showMenu ? onHideMenu : onShowMenu}>
              <MenuIcon
                light={light}
                open={showMenu}
              />
            </Link>
          </Layout>
          <Layout basis='15px' />
        </Column>
      </Layout>
      <Layout basis='10px' />
      <Layout>
        <Condition match={!light}>
          <Divider />
        </Condition>
        <Condition match={light}>
          <Divider
            transparent
            color='white'
          />
        </Condition>
      </Layout>
    </Row>
  </div>
)

export default HeaderPhone
