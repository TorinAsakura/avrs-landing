import { connect } from 'react-redux'
import { login, register, closeModal } from '../actions'
import { dismiss } from '../actions/messages'
import Page from '../components/Page'

export default connect(
  state => ({
    query: state.router.location.query,
    messages: state.messages,
  }),
  dispatch => ({
    onLogin: () => login(),
    onRegister: () => register(),
    onCloseModal: () => closeModal(),
    onDismiss: key => dispatch(dismiss(key)),
  }),
)(Page)
