import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'
import servicePlans from '../pages/ServicePlans/reducers'
import messages from './messages'
import support from './support'
import config from './config'
import news from './news'
import intl from './intl'
import menu from './menu'

const defaultApolloReducer = (state = {}) => state

export default (apollo = defaultApolloReducer) =>
  combineReducers({
    apollo,
    router,
    servicePlans,
    messages,
    support,
    config,
    news,
    intl,
    menu,
  })
