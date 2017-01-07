import React from 'react'
import { StyleSheet } from 'elementum'
import { Row, Layout } from 'flex-layouts'
import { Text, Space } from 'avrs-ui/src/text'
import { PointerLink, RouteLink } from 'avrs-ui/src/link'

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
    minHeight: '600px',
  },
})

const Summary = () => (
  <div className={styles()}>
    <Row fill>
      <Layout>
        <PointerLink to='/legal-information/company'>
          Компания
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/legal-information/terms-of-use'>
          Условия использования
        </PointerLink>
      </Layout>
      <Layout>
        <PointerLink to='/legal-information/confidentiality'>
          Конфиденциальность
        </PointerLink>
      </Layout>
      <Layout basis='140px' />
      <Layout>
        <div>
          <Text
            size='small'
            color='gray250'
            weight='light'
          >
            Для получения дополнительной информации или справки посетите страницу
          </Text>
          <RouteLink to='/support'>
            <Text
              size='small'
              color='blue400'
              weight='light'
            >
              службы поддержки
            </Text>
          </RouteLink>
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
