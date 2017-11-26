export default () =>
  async (req, res, next) => {
    if (req.url.includes('.') || !req.cookies.locale) {
      next()

      return
    }

    const [_, localeParam, ...restParams] = req.url.split('/') // eslint-disable-line no-unused-vars

    let locale = null
    let pathname = null
    let redirectPath = null

    if (['de', 'ru'].includes(localeParam)) {
      locale = localeParam
      pathname = restParams
    } else {
      locale = 'en'
      pathname = [localeParam, ...restParams]
    }

    if (req.cookies.locale !== locale) {
      if (req.cookies.locale === 'en') {
        redirectPath = pathname
      } else if (['de', 'ru'].includes(req.cookies.locale)) {
        redirectPath = [req.cookies.locale, ...pathname]
      }
    }

    if (redirectPath) {
      res.redirect(301, `/${redirectPath.join('/')}`)
    } else {
      next()
    }
  }
