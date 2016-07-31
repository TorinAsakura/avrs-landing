import path from 'path'
import Express from 'express'
import serveStatic from 'serve-static'
import render from './middleware/render'

export default function configureApp(app = new Express()) {
  app.use(serveStatic(path.resolve(__dirname, '../../public')))

  app.use(render(app.get('env')))

  return app
}
