import React from 'react'
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Block } from 'avrs-ui/src/content'
import { Text, Space } from 'avrs-ui/src/text'
import { Divider } from 'avrs-ui/src/divider'
import { Slider } from 'avrs-ui/src/slider'
import { Link } from 'avrs-ui/src/link'

const messages = defineMessages({
  title: {
    id: 'serice_plans.select.title',
    defaultMessage: 'Выберите тариф',
  },
  message: {
    id: 'serice_plans.select.message',
    defaultMessage: 'Настройте параметры и мы подскажем, какой тариф вам подходит:',
  },
  time: {
    id: 'serice_plans.select.time',
    defaultMessage: 'Сколько ваш ПК может находиться в сети?',
  },
  cpu: {
    id: 'serice_plans.select.cpu',
    defaultMessage: 'Планируемый арендный ресурс CPU',
  },
  memory: {
    id: 'serice_plans.select.memory',
    defaultMessage: 'Планируемый арендный ресурс RAM Gb',
  },
  income: {
    id: 'serice_plans.select.income',
    defaultMessage: 'Ваш заработок:',
  },
  result: {
    id: 'serice_plans.select.result',
    defaultMessage: 'С тарифом {servicePlan} за {period} подписки',
  },
  period: {
    id: 'serice_plans.select.period',
    defaultMessage: '{period} дней',
  },
  more: {
    id: 'serice_plans.select.more',
    defaultMessage: 'Подробнее о тарифах',
  },
  buy: {
    id: 'serice_plans.select.buy',
    defaultMessage: 'Зарегистрироваться и купить',
  },
  basis: {
    id: 'service_plans.basis',
    defaultMessage: 'Базис',
  },
  standart: {
    id: 'service_plans.standart',
    defaultMessage: 'Стандарт',
  },
  premium: {
    id: 'service_plans.premium',
    defaultMessage: 'Премиум',
  },
  business: {
    id: 'service_plans.business',
    defaultMessage: 'Бизнес',
  },
  price: {
    id: 'service_plans.price',
    defaultMessage: 'Цена лицензии',
  },
})

const SelectRate = ({ intl, plan, onChangePeriod, onChangeTime, onChangeCPU, onChangeMemory, onRegister }) => (
  <Block shadow>
    <Row>
      <Layout basis='15px' />
      <Layout justify='center'>
        <Text
          size='medium'
          color='black400'
        >
          {intl.formatMessage(messages.title)}
        </Text>
      </Layout>
      <Layout basis='15px' />
      <Layout>
        <Divider />
      </Layout>
      <Layout basis='45px' />
      <Layout>
        <Column>
          <Layout basis='90px' />
          <Layout basis='310px'>
            <Text
              weight='light'
              color='gray250'
              lineHeight='extended'
            >
              {intl.formatMessage(messages.message)}
            </Text>
          </Layout>
        </Column>
      </Layout>
      <Layout basis='25px' />
      <Layout>
        <Column>
          <Layout basis='90px' />
          <Layout basis='310px'>
            <Row>
              <Layout>
                <Text
                  size='small'
                  color='gray250'
                >
                  {intl.formatMessage(messages.time)}
                </Text>
              </Layout>
              <Layout basis='10px' />
              <Layout>
                <Slider
                  prefix='ч.'
                  value={plan.time}
                  markers={[10, 12, 15, 20]}
                  onChange={onChangeTime}
                />
              </Layout>
              <Layout basis='45px' />
              <Layout>
                <Text
                  size='small'
                  color='gray250'
                >
                  {intl.formatMessage(messages.cpu)}
                </Text>
              </Layout>
              <Layout basis='10px' />
              <Layout>
                <Slider
                  prefix='%'
                  value={plan.cpu}
                  markers={[5, 15, 20, 40]}
                  onChange={onChangeCPU}
                />
              </Layout>
              <Layout basis='45px' />
              <Layout>
                <Text
                  size='small'
                  color='gray250'
                >
                  {intl.formatMessage(messages.memory)}
                </Text>
              </Layout>
              <Layout basis='10px' />
              <Layout>
                <Slider
                  prefix='Gb'
                  value={plan.memory / 1024}
                  markers={[1, 2, 3, 4]}
                  onChange={onChangeMemory}
                />
              </Layout>
            </Row>
          </Layout>
          <Layout basis='80px' />
          <Layout>
            <Divider vertical />
          </Layout>
          <Layout basis='45px' />
          <Layout basis='320px'>
            <Row>
              <Layout>
                <Column>
                  <Layout grow={1}>
                    <Row>
                      <Layout>
                        <Text
                          weight='light'
                          color='gray250'
                          lineHeight='extended'
                        >
                          {intl.formatMessage(messages.income)}
                        </Text>
                      </Layout>
                      <Layout basis='15px' />
                      <Layout>
                        <Text size='large'>
                          {plan.amount} €
                        </Text>
                      </Layout>
                    </Row>
                  </Layout>
                  <Layout grow={1}>
                    <Row>
                      <Layout>
                        <Text
                          weight='light'
                          color='gray250'
                          lineHeight='extended'
                        >
                          {intl.formatMessage(messages.price)}:
                        </Text>
                      </Layout>
                      <Layout basis='15px' />
                      <Layout>
                        <Text size='large'>
                          {plan.price} €
                        </Text>
                      </Layout>
                    </Row>
                  </Layout>
                </Column>
              </Layout>
              <Layout basis='40px' />
              <Layout>
                <Text
                  color='gray250'
                  size='small'
                >
                  <FormattedMessage
                    {...messages.result}
                    values={{
                      servicePlan: (
                        <Text
                          color='blue400'
                          size='small'
                        >
                          {intl.formatMessage(messages[plan.type])}
                        </Text>
                      ),
                      period: (
                        <Text
                          color='blue400'
                          size='small'
                        >
                          {intl.formatMessage(messages.period, { period: plan.period })}
                        </Text>
                      ),
                    }}
                  />
                </Text>
              </Layout>
              <Layout basis='25px' />
              <Layout>
                <Slider
                  value={plan.period}
                  markers={[30, 90, 180, 365]}
                  onChange={onChangePeriod}
                />
              </Layout>
            </Row>
          </Layout>
          <Layout grow={1} />
        </Column>
      </Layout>
      <Layout basis='50px' />
      <Layout>
        <Divider />
      </Layout>
      <Layout basis='15px' />
      <Layout>
        <Column>
          <Layout grow={1} />
          <Layout>
            <Link onClick={onRegister}>
              <Text
                color='gray250'
                size='small'
              >
                {intl.formatMessage(messages.buy)}
              </Text>
            </Link>
            <Space />
            <Text
              color='gray250'
              size='small'
            >
              &#10095;
            </Text>
          </Layout>
          <Layout basis='25px' />
        </Column>
      </Layout>
      <Layout basis='15px' />
    </Row>
  </Block>
)

export default injectIntl(SelectRate)
