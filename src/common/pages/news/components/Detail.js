import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Divider } from 'avrs-ui/src/divider'
import { Text, Space } from 'avrs-ui/src/text'
import { RouteLink } from 'avrs-ui/src/link'

const Detail = ({ title, content, visits, date }) => (
  <Column>
    <Layout grow={1} />
    <Layout basis='900px'>
      <Row>
        <Layout>
          <Column>
            <Layout basis='100px' />
            <Layout grow={1}>
              <Row>
                <Layout basis='40px' />
                <Layout>
                  <Text
                    color='blue400'
                    weight='light'
                    size='small'
                  >
                    &#10094;
                  </Text>
                  <Space />
                  <RouteLink to='/news'>
                    <Text
                      color='blue400'
                      weight='light'
                      size='small'
                    >
                      Вернуться к ленте новостей
                    </Text>
                  </RouteLink>
                </Layout>
                <Layout basis='15px' />
                <Layout>
                  <Text
                    size='large'
                    color='black400'
                  >
                    {title}
                  </Text>
                </Layout>
                <Layout basis='20px' />
                <Layout>
                  <div style={{ width: 700 }}>
                    <Text
                      color='black400'
                      weight='light'
                      lineHeight='large'
                    >
                      {content}
                    </Text>
                  </div>
                </Layout>
                <Layout basis='30px' />
                <Layout>
                  <Column>
                    <Layout grow={1} />
                    <Layout>
                      <Text
                        size='small'
                        color='gray300'
                      >
                        {visits} Просмотров
                      </Text>
                    </Layout>
                    <Layout basis='20px' />
                    <Layout>
                      <Text
                        size='small'
                        color='gray300'
                      >
                        {date}
                      </Text>
                    </Layout>
                    <Layout grow={1} />
                  </Column>
                </Layout>
                <Layout basis='20px' />
              </Row>
            </Layout>
            <Layout basis='100px' />
          </Column>
        </Layout>
        <Layout>
          <Divider />
        </Layout>
        <Layout basis='15px' />
        <Layout justify='center'>
          <Text
            color='blue400'
            weight='light'
            size='small'
          >
            &#10094;
          </Text>
          <Space />
          <RouteLink to='/news'>
            <Text
              color='blue400'
              weight='light'
              size='small'
            >
              Вернуться к ленте новостей
            </Text>
          </RouteLink>
        </Layout>
        <Layout basis='500px' />
      </Row>
    </Layout>
    <Layout grow={1} />
  </Column>
)

export default Detail
