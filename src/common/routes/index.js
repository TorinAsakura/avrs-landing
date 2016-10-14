import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Page from '../containers/Page'
import Main from '../pages/index/containers/Main'
import About from '../pages/about/containers/About'
import ServicePlans from '../pages/ServicePlans/containers/ServicePlans'
import News from '../pages/news/containers/News'
import NewsDetail from '../pages/news/containers/Detail'
import LegalInformation from '../pages/LegalInformation/components/LegalInformation'
import TermsOfUse from '../pages/LegalInformation/components/TermsOfUse'
import Company from '../pages/LegalInformation/components/Company'
import Confidentiality from '../pages/LegalInformation/components/Confidentiality'
import MarketingMaterials from '../pages/MarketingMaterials/components/MarketingMaterials'

export default (
  <Route path='/'>
    <IndexRoute component={Main} />
    <Route component={Page}>
      <Route path='about(/:question)' component={About} />
      <Route path='service-plans' component={ServicePlans} />
      <Route path='news' component={News} />
      <Route path='news/:slug' component={NewsDetail} />
      <Route path='legal-information' component={LegalInformation}>
        <Route path='company' component={Company} />
        <Route path='terms-of-use' component={TermsOfUse} />
        <Route path='confidentiality' component={Confidentiality} />
      </Route>
      <Route path='marketing-materials' component={MarketingMaterials} />
    </Route>
  </Route>
)
