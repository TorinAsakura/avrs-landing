import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Text } from 'avrs-ui/src/text'
import { Section } from 'avrs-ui/src/section'
import { Button } from 'avrs-ui/src/button'
import Network from './network/Network'

const Connect = ({ onRegister }) => (
  <Section color='blue'>
    <Network>
      <Row>
        <Layout basis='55px' />
        <Layout>
          <Column>
            <Layout grow={1} />
            <Layout basis='900px'>
              <Column align='center'>
                <Layout basis='410px'>
                  <Row>
                    <Layout>
                      <Text
                        color='white'
                        size='medium'
                      >
                        Станьте участником сейчас, это бесплатно!
                      </Text>
                    </Layout>
                    <Layout basis='15px' />
                    <Layout>
                      <Text
                        weight='light'
                        color='white'
                        size='small'
                        lineHeight='extended'
                      >
                        Вам необходимо приобрести любой пакет.
                        Вы получите лицензию на использование программного
                        обеспечения для сдачи ресурсов вашего ПК в аренду
                      </Text>
                    </Layout>
                  </Row>
                </Layout>
                <Layout grow={1} />
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
              </Column>
            </Layout>
            <Layout grow={1} />
          </Column>
        </Layout>
        <Layout basis='45px' />
      </Row>
    </Network>
  </Section>
)

export default Connect
