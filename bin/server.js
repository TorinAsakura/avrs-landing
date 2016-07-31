/* eslint-disable no-console */
import configureApp from '../src/server'

const app = configureApp()

app.listen(3000, error => {
  if (error) {
    throw error
  }

  console.info('Server listening on port %s', 3000)
})
