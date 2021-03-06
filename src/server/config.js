import nconf from 'nconf'

nconf.argv().env({ separator: '_', lowerCase: true })

nconf.defaults({
  api: {
    url: 'https://api.stage.aversis.net',
  },
})

export default nconf
