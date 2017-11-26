import { connect } from 'react-redux'
import { login, register } from '../actions'
import { dismiss } from '../actions/messages'
import { show, hide } from '../actions/menu'
import { change } from '../actions/intl'

export default connect(
  state => ({
    light: ['/', '/de/', '/ru/', '/de', '/ru'].includes(state.router.location.pathname),
    pathname: state.router.location.pathname,
    query: state.router.location.query,
    locale: state.router.params.locale || 'en',
    messages: state.messages,
    showMenu: state.menu,
    newsPreview: state.news.preview,
  }),
  (dispatch, { router }) => ({
    onLogin: () => login(),
    onRegister: () => register(),
    onCloseModal: () => router.goBack(),
    onDismiss: key => dispatch(dismiss(key)),
    onShowMenu: () => dispatch(show()),
    onHideMenu: () => dispatch(hide()),
    onChangeLocale: locale => dispatch(change(locale)),
  }),
)
