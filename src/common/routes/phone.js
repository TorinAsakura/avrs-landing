import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Page from '../containers/PagePhone'
import Main from '../pages/index/containers/MainPhone'
import About from '../pages/about/containers/AboutPhone'
import ServicePlans from '../pages/ServicePlans/containers/ServicePlansPhone'
import News from '../pages/news/containers/NewsPhone'
import NewsDetail from '../pages/news/containers/DetailPhone'
import LegalInformation from '../pages/LegalInformation/containers/LegalInformationPhone'
import MarketingMaterials from '../pages/MarketingMaterials/components/MarketingMaterialsPhone'
import Products from '../pages/products/containers/ProductsPhone'
import Support from '../pages/support/containers/SupportPhone'

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
