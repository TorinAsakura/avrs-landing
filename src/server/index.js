import Express from 'express'
import cookieParser from 'cookie-parser'
import { capture as captureDevice } from 'express-device'
import render from './middleware/render'
import locale from './middleware/locale'

export default async (app = new Express()) => {
  app.use(cookieParser())
  app.use(captureDevice())

  app.use('/health', (req, res) => res.status(200).send())

  app.use(locale())
  app.use(render(app.get('env')))

  return app
}
