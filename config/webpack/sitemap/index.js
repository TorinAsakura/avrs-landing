import { createRoutes } from 'react-router'
import { routesParser as parseRoutes, paramsApplier as applyParams } from 'react-router-sitemap'
import getRoutes from '../../../src/common/routes'

const parsed = parseRoutes(createRoutes(getRoutes()))

const withParams = applyParams(parsed, {
  '/about(/:question)': [
    { question: '*' },
  ],
  '/news/:slug': [
    { slug: '*' },
  ],
  '/legal-information/:slug': [
    { slug: '*' },
  ],
  '/:locale': [
    { locale: ['ru', 'de'] },
  ],
  '/:locale/about(/:question)': [
    { locale: ['ru', 'de'], question: '*' },
  ],
  '/:locale/service-plans': [
    { locale: ['ru', 'de'] },
  ],
  '/:locale/news/:slug': [
    { locale: ['ru', 'de'], slug: '*' },
  ],
  '/:locale/legal-information/:slug': [
    { locale: ['ru', 'de'], slug: '*' },
  ],
  '/:locale/marketing-materials': [
    { locale: ['ru', 'de'] },
  ],
  '/:locale/products': [
    { locale: ['ru', 'de'] },
  ],
  '/:locale/support': [
    { locale: ['ru', 'de'] },
  ],
})

const paths = withParams.map(path => path.replace('(/*)', '/*'))

export default paths
