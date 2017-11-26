import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Page from '../containers/Page'
import Main from '../pages/index/containers/Main'
import About from '../pages/about/containers/About'
import ServicePlans from '../pages/ServicePlans/containers/ServicePlans'
import News from '../pages/news/containers/News'
import NewsDetail from '../pages/news/containers/Detail'
import LegalInformation from '../pages/LegalInformation/containers/LegalInformation'
import MarketingMaterials from '../pages/MarketingMaterials/components/MarketingMaterials'
import Products from '../pages/products/containers/Products'
import Support from '../pages/support/containers/Support'

export default () => (
  <Route path='/' component={Page}>
    <IndexRoute component={Main} />
    <Route path='about(/:question)' component={About} />
    <Route path='service-plans' component={ServicePlans} />
    <Route path='news' component={News} />
    <Route path='news/:slug' component={NewsDetail} />
    <Route path='legal-information/:slug' component={LegalInformation} />
    <Route path='marketing-materials' component={MarketingMaterials} />
    <Route path='products' component={Products} />
    <Route path='support' component={Support} />
    <Route path='/:locale'>
      <IndexRoute component={Main} />
      <Route path='about(/:question)' component={About} />
      <Route path='service-plans' component={ServicePlans} />
      <Route path='news' component={News} />
      <Route path='news/:slug' component={NewsDetail} />
      <Route path='legal-information/:slug' component={LegalInformation} />
      <Route path='marketing-materials' component={MarketingMaterials} />
      <Route path='products' component={Products} />
      <Route path='support' component={Support} />
    </Route>
  </Route>
)
