import React from 'react'
import { StyleSheet } from 'elementum'
import { Row, Layout } from 'flex-layouts'
import { Text, Space } from 'avrs-ui/src/text'
import { PointerLink } from 'avrs-ui/src/link'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRight: '1px solid #E5E5E5',
    boxSizing: 'border-box',
    padding: '20px 30px 40px 0px',
    marginBottom: '20px',
    position: 'relative',
    boxShadow: 'inset -4px 0 4px -4px rgba(0,0,0,0.09)',
  },
})

const Summary = () => (
  <div className={styles()}>
    <Row>
      <Layout>
        <Text
          size='small'
          color='black400'
          weight='medium'
        >
          Основные
        </Text>
      </Layout>
      <Layout basis='2px' />
      <Layout>
        <PointerLink to='/about'>
          Что такое Aversis?
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/what-you-need'>
          Для чего это нужно?
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/advantages'>
          Какие преимущества?
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/capabilities'>
          Какие возможности?
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/target'>
          Какая наша цель?
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/join'>
          Как стать участником?
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/income'>
          Как мне получать доход?
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/carrier'>
          Условия карьеры
        </PointerLink>
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <Text
          size='small'
          color='black400'
          weight='medium'
        >
          Aversis
        </Text>
      </Layout>
      <Layout basis='2px' />
      <Layout>
        <PointerLink to='/about/invite-members'>
          Приглашение участников
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/products'>
          Продукты компании
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/requirements'>
          Требования для ПК
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/referal'>
          Реферальная программа
        </PointerLink>
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <Text
          size='small'
          color='black400'
          weight='medium'
        >
          Безопасность
        </Text>
      </Layout>
      <Layout basis='2px' />
      <Layout>
        <PointerLink to='/about/confidence'>
          Почему я могу вам доверять?
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/hack'>
          Могут ли меня взломать?
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/two-step-auth'>
          Двухэтапная авторизация
        </PointerLink>
      </Layout>
      <Layout basis='30px' />
      <Layout>
        <Text
          size='small'
          color='black400'
          weight='medium'
        >
          Аккаунт
        </Text>
      </Layout>
      <Layout basis='2px' />
      <Layout>
        <PointerLink to='/about/registration'>
          Регистрация
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/conclusion-of-an-agreement'>
          Заключение соглашения
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/termination'>
          Расторжение соглашения
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/change-data'>
          Изменение данных
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/payment'>
          Оплата лицензии
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/about/withdrawal'>
          Вывод средств
        </PointerLink>
      </Layout>
      <Layout basis='60px' />
      <Layout>
        <div>
          <Text
            size='small'
            color='gray250'
            weight='light'
          >
            Для получения дополнительной информации или справки посетите страницу
          </Text>
          <Text
            size='small'
            color='blue400'
            weight='light'
          >
            службы поддержки
          </Text>
          <Space />
          <Text
            size='small'
            color='gray250'
            weight='light'
          >
            Aversis.
          </Text>
        </div>
      </Layout>
    </Row>
  </div>
)

export default Summary
