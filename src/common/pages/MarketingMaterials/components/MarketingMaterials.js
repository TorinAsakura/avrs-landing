import React from 'react'
import { injectIntl } from 'react-intl'
import { Column, Row, Layout } from 'flex-layouts'
import { Divider } from 'avrs-ui/src/divider'
import { GhostButton } from 'avrs-ui/src/button'
import { Text } from 'avrs-ui/src/text'
import Header from './Header'
import { Presentation, Brandbook, BrandbookMaterials, Logos } from './images'
import messages from './messages'

const getPresetntationUrl = (locale) => {
  const target = locale === 'ru' ? 'RU' : 'DE'

  return `https://s3.eu-central-1.amazonaws.com/avrs/promo/Presentation-JP-${target}.pdf`
}

const openPresentation = locale => window.open(getPresetntationUrl(locale))

const openBrandbook = () =>
  window.open('https://s3.eu-central-1.amazonaws.com/avrs/promo/Brandbook.pdf')

const MarketingMaterials = ({ intl }) => (
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
                        {intl.formatMessage(messages.presentation)}
                      </Text>
                    </Layout>
                    <Layout basis='12px' />
                    <Layout>
                      <Column>
                        <Layout>
                          <a
                            download
                            href={getPresetntationUrl(intl.locale)}
                          >
                            <GhostButton
                              rounded
                              color='blue'
                            >
                              {intl.formatMessage(messages.download)} PDF (218 Kb.)
                            </GhostButton>
                          </a>
                        </Layout>
                        <Layout basis='12px' />
                        <Layout>
                          <GhostButton
                            rounded
                            color='blue'
                            onClick={() => openPresentation(intl.locale)}
                          >
                            {intl.formatMessage(messages.view)}
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
                        {intl.formatMessage(messages.brandbook)}
                      </Text>
                    </Layout>
                    <Layout basis='12px' />
                    <Layout>
                      <Column>
                        <Layout>
                          <a
                            download
                            href='https://s3.eu-central-1.amazonaws.com/avrs/promo/Brandbook.pdf'
                          >
                            <GhostButton rounded color='blue'>
                              {intl.formatMessage(messages.download)} PDF (37.6 Mb.)
                            </GhostButton>
                          </a>
                        </Layout>
                        <Layout basis='12px' />
                        <Layout>
                          <GhostButton
                            rounded
                            color='blue'
                            onClick={openBrandbook}
                          >
                            {intl.formatMessage(messages.view)}
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
                        {intl.formatMessage(messages.brandbookMaterial)}
                      </Text>
                    </Layout>
                    <Layout basis='12px' />
                    <Layout>
                      <a href='https://s3.eu-central-1.amazonaws.com/avrs/promo/Identity.zip'>
                        <GhostButton rounded color='blue'>
                          {intl.formatMessage(messages.download)} ZIP (15,6 Mb.)
                        </GhostButton>
                      </a>
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
                        {intl.formatMessage(messages.logos)}
                      </Text>
                    </Layout>
                    <Layout basis='12px' />
                    <Layout>
                      <a href='https://s3.eu-central-1.amazonaws.com/avrs/promo/Logos.zip'>
                        <GhostButton rounded color='blue'>
                          {intl.formatMessage(messages.download)} ZIP (21 Kb.)
                        </GhostButton>
                      </a>
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

export default injectIntl(MarketingMaterials)
