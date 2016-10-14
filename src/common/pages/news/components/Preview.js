import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Divider } from 'avrs-ui/src/divider'
import { Text, Space } from 'avrs-ui/src/text'
import { RouteLink } from 'avrs-ui/src/link'

const Preview = ({ slug, title, content, visits, date }) => (
  <Row>
    <Layout basis='30px' />
    <Layout>
      <Column>
        <Layout basis='100px' />
        <Layout grow={1}>
          <Row>
            <Layout>
              <RouteLink to={`/news/${slug}`}>
                <Text
                  size='large'
                  color='black400'
                >
                  {title}
                </Text>
              </RouteLink>
            </Layout>
            <Layout basis='20px' />
            <Layout>
              <div style={{ width: 700 }}>
                <Text
                  color='black400'
                  weight='light'
                  lineHeight='large'
                >
                  <span>
                    {content}
                    <Space />
                    <RouteLink to={`/news/${slug}`}>
                      <Text
                        color='blue400'
                        weight='light'
                      >
                        Читать далее
                      </Text>
                    </RouteLink>
                    <Space />
                    <Text
                      color='blue400'
                      weight='light'
                      lineHeight='extended'
                    >
                      &#10095;
                    </Text>
                  </span>
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
            <Layout basis='15px' />
          </Row>
        </Layout>
        <Layout basis='100px' />
      </Column>
    </Layout>
    <Layout>
      <Divider />
    </Layout>
    <Layout basis='30px' />
  </Row>
)

export default Preview
