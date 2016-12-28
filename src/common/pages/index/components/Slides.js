import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from 'avrs-ui/src/text'
import { Section } from 'avrs-ui/src/section'
import { Carousel, Screen } from 'avrs-ui/src/carousel'
import { About, Benefit, Advantage, Target } from 'avrs-ui/src/promo'
import { RouteLink } from 'avrs-ui/src/link'

const Slides = () => (
  <Section id='about'>
    <Column>
      <Layout grow={1} />
      <Layout basis='900px'>
        <Carousel>
          <Screen title='Что это такое'>
            <Row>
              <Layout basis='80px' />
              <Layout>
                <Column>
                  <Layout basis='40px' />
                  <Layout basis='466px'>
                    <Row>
                      <Layout>
                        <Text size='large'>
                          Дайте возможность вашему компьютеру принести бо́льшую пользу.
                        </Text>
                      </Layout>
                      <Layout basis='15px' />
                      <Layout>
                        <Text
                          size='normal'
                          weight='light'
                          color='gray200'
                        >
                          По большому счету, практически каждый из нас не использует потенциал своего компьютера
                          на полную мощность. На что он тратит свою энергию? А если тысячи домашних
                          ПК объединить ...
                        </Text>
                      </Layout>
                      <Layout basis='18px' />
                      <Layout>
                        <Column>
                          <Layout>
                            <RouteLink to='/about'>
                              <Text
                                color='blue400'
                                size='small'
                              >
                                Узнать подробнее
                              </Text>
                            </RouteLink>
                            <Space />
                            <Text
                              color='blue400'
                              size='small'
                              lineHeight='extended'
                            >
                              &#10095;
                            </Text>
                          </Layout>
                          <Layout basis='30px' />
                          <Layout>
                            <RouteLink to={{ query: { modal: 'video' } }}>
                              <Text
                                size='small'
                                color='blue400'
                              >
                                Смотреть видео
                              </Text>
                            </RouteLink>
                            <Space />
                            <Text
                              color='blue400'
                              size='small'
                              lineHeight='extended'
                            >
                              &#10095;
                            </Text>
                          </Layout>
                        </Column>
                      </Layout>
                    </Row>
                  </Layout>
                  <Layout basis='115px' />
                  <Layout>
                    <About />
                  </Layout>
                  <Layout basis='20px' />
                </Column>
              </Layout>
            </Row>
          </Screen>
          <Screen title='Польза Aversis'>
            <Row>
              <Layout basis='80px' />
              <Layout>
                <Column>
                  <Layout basis='40px' />
                  <Layout basis='450px'>
                    <Row>
                      <Layout>
                        <Text size='large'>
                          Таким образом, возможно разработать даже лекарство, например, от рака.
                        </Text>
                      </Layout>
                      <Layout basis='15px' />
                      <Layout>
                        <Text
                          size='normal'
                          weight='light'
                          color='gray200'
                        >
                          Каждый компьютер получит только свою задачу.
                          Для этого специальный софт, принимает небольшие задания,
                          обрабатывает и отправляет полученные результаты обратно.
                        </Text>
                      </Layout>
                      <Layout basis='18px' />
                      <Layout>
                        <Column>
                          <Layout>
                            <RouteLink to='/about'>
                              <Text
                                color='blue400'
                                size='small'
                              >
                                Узнать подробнее
                              </Text>
                            </RouteLink>
                            <Space />
                            <Text
                              color='blue400'
                              size='small'
                              lineHeight='extended'
                            >
                              &#10095;
                            </Text>
                          </Layout>
                          <Layout basis='30px' />
                          <Layout>
                            <RouteLink to={{ query: { modal: 'video' } }}>
                              <Text
                                size='small'
                                color='blue400'
                              >
                                Смотреть видео
                              </Text>
                            </RouteLink>
                            <Space />
                            <Text
                              color='blue400'
                              size='small'
                              lineHeight='extended'
                            >
                              &#10095;
                            </Text>
                          </Layout>
                        </Column>
                      </Layout>
                    </Row>
                  </Layout>
                  <Layout basis='40px' />
                  <Layout>
                    <Benefit />
                  </Layout>
                  <Layout basis='10px' />
                </Column>
              </Layout>
            </Row>
          </Screen>
          <Screen title='Преимущества'>
            <Row>
              <Layout basis='80px' />
              <Layout>
                <Column>
                  <Layout basis='40px' />
                  <Layout basis='426px'>
                    <Row>
                      <Layout>
                        <Text size='large'>
                          О том, почему стоит доверять именно нам
                        </Text>
                      </Layout>
                      <Layout basis='15px' />
                      <Layout>
                        <Text
                          size='normal'
                          weight='light'
                          color='gray200'
                        >
                          Aversis Sytems является официальной компанией.
                          Руководитель - John Appleseed, человек с высокой репутацией в сфере бизнеса.
                          Наш бизнес строится на отсутствии рисков для наших клиентов ...
                        </Text>
                      </Layout>
                      <Layout basis='18px' />
                      <Layout>
                        <Column>
                          <Layout>
                            <RouteLink to='/about'>
                              <Text
                                color='blue400'
                                size='small'
                              >
                                Узнать подробнее
                              </Text>
                            </RouteLink>
                            <Space />
                            <Text
                              color='blue400'
                              size='small'
                              lineHeight='extended'
                            >
                              &#10095;
                            </Text>
                          </Layout>
                          <Layout basis='30px' />
                          <Layout>
                            <RouteLink to={{ query: { modal: 'video' } }}>
                              <Text
                                size='small'
                                color='blue400'
                              >
                                Смотреть видео
                              </Text>
                            </RouteLink>
                            <Space />
                            <Text
                              color='blue400'
                              size='small'
                              lineHeight='extended'
                            >
                              &#10095;
                            </Text>
                          </Layout>
                        </Column>
                      </Layout>
                    </Row>
                  </Layout>
                  <Layout basis='115px' />
                  <Layout>
                    <Advantage />
                  </Layout>
                  <Layout basis='20px' />
                </Column>
              </Layout>
            </Row>
          </Screen>
          <Screen title='Цель'>
            <Row>
              <Layout basis='80px' />
              <Layout>
                <Column>
                  <Layout basis='40px' />
                  <Layout basis='426px'>
                    <Row>
                      <Layout>
                        <Text size='large'>
                          Наша главная цель – развитие глобальной сети.
                        </Text>
                      </Layout>
                      <Layout basis='15px' />
                      <Layout>
                        <Text
                          size='normal'
                          weight='light'
                          color='gray200'
                        >
                          Привлечь ресурсы для развития и ускоренного роста
                          Глобальной Распределенной Вычислительной Системы,
                          а также объединить полученные вычислительные ресурсы ПК участников ...
                        </Text>
                      </Layout>
                      <Layout basis='18px' />
                      <Layout>
                        <Column>
                          <Layout>
                            <RouteLink to='/about'>
                              <Text
                                color='blue400'
                                size='small'
                              >
                                Узнать подробнее
                              </Text>
                            </RouteLink>
                            <Space />
                            <Text
                              color='blue400'
                              size='small'
                              lineHeight='extended'
                            >
                              &#10095;
                            </Text>
                          </Layout>
                          <Layout basis='30px' />
                          <Layout>
                            <RouteLink to={{ query: { modal: 'video' } }}>
                              <Text
                                size='small'
                                color='blue400'
                              >
                                Смотреть видео
                              </Text>
                            </RouteLink>
                            <Space />
                            <Text
                              color='blue400'
                              size='small'
                              lineHeight='extended'
                            >
                              &#10095;
                            </Text>
                          </Layout>
                        </Column>
                      </Layout>
                    </Row>
                  </Layout>
                  <Layout basis='50px' />
                  <Layout>
                    <Target />
                  </Layout>
                  <Layout basis='20px' />
                </Column>
              </Layout>
            </Row>
          </Screen>
        </Carousel>
      </Layout>
      <Layout grow={1} />
    </Column>
  </Section>
)

export default Slides
