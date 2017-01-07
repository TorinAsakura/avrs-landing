import React from 'react'
import { Link } from 'react-router'
import { Column, Row, Layout } from 'flex-layouts'
import { Logo, LogoWhite } from 'avrs-ui/src/logo'
import { Button, GhostButton } from 'avrs-ui/src/button'
import { Condition } from 'avrs-ui/src/condition'
import { Divider } from 'avrs-ui/src/divider'
import { NavLink } from 'avrs-ui/src/link'

const Header = ({ light, onLogin, onRegister }) => (
  <Row>
    <Layout basis='10px' />
    <Layout>
      <Column align='center'>
        <Layout basis='35px' />
        <Layout>
          <Link to='/'>
            <Condition match={!light}>
              <Logo height={25} />
            </Condition>
            <Condition match={light}>
              <LogoWhite height={25} />
            </Condition>
          </Link>
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <NavLink light={light} to='/about'>
            О продукте
          </NavLink>
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <NavLink light={light} to='/?section=capabilities'>
            Возможности
          </NavLink>
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <NavLink light={light} to='/service-plans'>
            Тарифы
          </NavLink>
        </Layout>
        <Layout basis='30px' />
        <Layout>
          <NavLink light={light} to='/news'>
            Новости
          </NavLink>
        </Layout>
        <Layout grow={1} />
        <Layout>
          <GhostButton
            rounded
            color={light ? 'white' : 'blue'}
            onClick={onLogin}
          >
            Войти
          </GhostButton>
        </Layout>
        <Layout basis='10px' />
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
)

export default Header
