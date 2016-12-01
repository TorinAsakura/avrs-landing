/* eslint-disable import/no-dynamic-require */
require('babel-register')({ ignore: /node_modules\/(?!avrs-ui)/ })

require(`./${process.argv[2]}`)
