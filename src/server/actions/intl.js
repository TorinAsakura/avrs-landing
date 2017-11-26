import path from 'path'
import po from 'pofile'
import glob from 'glob-promise'
import fs from 'fs-extra-promise'
import * as actions from '../../common/constants/intl'

const loadLocaleContent = async (locale) => {
  const contentPath = path.join(process.cwd(), 'node_modules/avrs-locales/landing/')
  const filenames = await glob(path.join(contentPath, `**/${locale}.md`))
  const files = await Promise.all(filenames.map(filename => fs.readFileAsync(filename)))

  return filenames.reduce((result, filename, index) => {
    const [name] = filename.replace(contentPath, '').replace('.md', '').split('/')
    const content = files[index].toString()

    return {
      ...result,
      [name]: content,
    }
  }, {})
}

const loadLocaleMessages = async (locale) => {
  if (locale === 'ru') {
    return {}
  }

  const content = await fs.readFileAsync(
    path.join(process.cwd(), 'node_modules/avrs-locales/landing', `${locale}.po`),
  )

  return po.parse(content.toString()).items.reduce((result, { msgctxt, msgstr }) => ({
    ...result,
    [msgctxt]: msgstr[0] ? msgstr[0] : '',
  }), {})
}

export function init() {
  return async (dispatch, getState) => {
    const locale = getState().router.params.locale || 'en'

    if (!['en', 'de', 'ru'].includes(locale)) {
      return null
    }

    const [content, messages] = await Promise.all([
      loadLocaleContent(locale),
      loadLocaleMessages(locale),
    ])

    dispatch({
      type: actions.change,
      locale,
      content,
      messages,
    })

    return null
  }
}
