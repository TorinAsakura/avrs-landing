import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Divider } from 'avrs-ui/src/divider'
import { GhostButton } from 'avrs-ui/src/button'
import { Text } from 'avrs-ui/src/text'
import Header from './Header'
import { Presentation, Brandbook, BrandbookMaterials, Logos } from './images'

const MarketingMaterials = () => (
  <Row>
    <Layout>
      <Header />
    </Layout>
    <Layout basis='80px' />
    <Layout>
      <Column>
        <Layout grow={1} />
        <Layout basis='900px'>
          <Row>
            <Layout>
              <Column align='center'>
                <Layout basis='160px' />
                <Layout>
                  <Presentation />
                </Layout>
                <Layout basis='40px' />
                <Layout grow={1}>
                  <Row>
                    <Layout>
                      <Text
                        size='large'
                        color='black400'
                      >
                        Электронная презентация
                      </Text>
                    </Layout>
                    <Layout basis='12px' />
                    <Layout>
                      <Column>
                        <Layout>
                          <GhostButton rounded>
                            Скачать PDF (12 Mb.)
                          </GhostButton>
                        </Layout>
                        <Layout basis='12px' />
                        <Layout>
                          <GhostButton rounded>
                            Посмотреть
                          </GhostButton>
                        </Layout>
                      </Column>
                    </Layout>
                  </Row>
                </Layout>
              </Column>
            </Layout>
            <Layout basis='35px' />
            <Layout>
              <Divider />
            </Layout>
            <Layout basis='35px' />
            <Layout>
              <Column align='center'>
                <Layout basis='160px' />
                <Layout>
                  <Brandbook />
                </Layout>
                <Layout basis='40px' />
                <Layout grow={1}>
                  <Row>
                    <Layout>
                      <Text
                        size='large'
                        color='black400'
                      >
                        Брендбук
                      </Text>
                    </Layout>
                    <Layout basis='12px' />
                    <Layout>
                      <Column>
                        <Layout>
                          <GhostButton rounded>
                            Скачать PDF (12 Mb.)
                          </GhostButton>
                        </Layout>
                        <Layout basis='12px' />
                        <Layout>
                          <GhostButton rounded>
                            Посмотреть
                          </GhostButton>
                        </Layout>
                      </Column>
                    </Layout>
                  </Row>
                </Layout>
              </Column>
            </Layout>
            <Layout basis='35px' />
            <Layout>
              <Divider />
            </Layout>
            <Layout basis='35px' />
            <Layout>
              <Column align='center'>
                <Layout basis='160px' />
                <Layout>
                  <BrandbookMaterials />
                </Layout>
                <Layout basis='40px' />
                <Layout grow={1}>
                  <Row>
                    <Layout>
                      <Text
                        size='large'
                        color='black400'
                      >
                        Материалы к брендбуку
                      </Text>
                    </Layout>
                    <Layout basis='12px' />
                    <Layout>
                      <GhostButton rounded>
                        Скачать PDF (12 Mb.)
                      </GhostButton>
                    </Layout>
                  </Row>
                </Layout>
              </Column>
            </Layout>
            <Layout basis='35px' />
            <Layout>
              <Divider />
            </Layout>
            <Layout basis='35px' />
            <Layout>
              <Column align='center'>
                <Layout basis='160px' />
                <Layout>
                  <Logos />
                </Layout>
                <Layout basis='40px' />
                <Layout grow={1}>
                  <Row>
                    <Layout>
                      <Text
                        size='large'
                        color='black400'
                      >
                        Векторные логотипы
                      </Text>
                    </Layout>
                    <Layout basis='12px' />
                    <Layout>
                      <GhostButton rounded>
                        Скачать PDF (12 Mb.)
                      </GhostButton>
                    </Layout>
                  </Row>
                </Layout>
              </Column>
            </Layout>
            <Layout basis='35px' />
            <Layout>
              <Divider />
            </Layout>
          </Row>
        </Layout>
        <Layout grow={1} />
      </Column>
    </Layout>
    <Layout basis='80px' />
  </Row>
)

export default MarketingMaterials
