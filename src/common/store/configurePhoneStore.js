if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configurePhoneStore.prod')
} else {
  module.exports = require('./configurePhoneStore.dev')
}
