import po from 'pofile'

function loader(src) {
  if (this && this.cacheable) {
    this.cacheable()
  }

  const items = po.parse(src).items.reduce((result, { msgctxt, msgstr }) => ({
    ...result,
    [msgctxt]: msgstr[0] ? msgstr[0] : '',
  }), {})

  this.callback(null, `module.exports = ${JSON.stringify(items, null, 2)};`)
}

export default loader
