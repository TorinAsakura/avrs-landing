import moment from 'moment'
import cookie from 'js-cookie'
import { addLocaleData } from 'react-intl'
import ruLocaleData from 'react-intl/locale-data/ru'
import enLocaleData from 'react-intl/locale-data/en'
import deLocaleData from 'react-intl/locale-data/de'
import { loadPreview } from './news'
import * as actions from '../constants/intl'

addLocaleData(ruLocaleData)
addLocaleData(enLocaleData)
addLocaleData(deLocaleData)

const loadFile = (name, locale) => System.import(`raw-loader!avrs-locales/landing/${name}/${locale}.md`)

const loadContent = async (names, locale) => {
  const files = await Promise.all(names.map(name => loadFile(name, locale)))

  return names.reduce((result, name, index) => ({
    ...result,
    [name]: files[index],
  }), {})
}

export function change(locale) {
  return async (dispatch, getState) => {
    const { hostname } = window.location

    cookie.set('locale', locale, { domain: `.${hostname}` })
    moment.locale(locale)

    const content = await loadContent(Object.keys(getState().intl.content), locale)

    if (locale === 'ru') {
      dispatch({
        type: actions.change,
        locale,
        content,
        messages: {},
      })
    } else {
      const messages = await System.import(`avrs-locales/landing/${locale}.po`)

      dispatch({
        type: actions.change,
        locale,
        content,
        messages,
      })
    }

    dispatch(loadPreview())

    const history = window.originalHisotry
    const [localeParam, ...restParams] = history.getCurrentLocation().pathname.substr(1).split('/')
    const params = ['de', 'ru'].includes(localeParam) ? restParams : [localeParam].concat(restParams)
    const pathname = locale === 'en' ? [''].concat(params).join('/') : ['', locale].concat(params).join('/')

    history.push(pathname)
  }
}
