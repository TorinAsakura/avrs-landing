import { connect } from 'react-redux'
import { login, register, closeModal } from '../actions'
import Page from '../components/Page'

export default connect(
  state => ({
    query: state.router.location.query,
  }),
  () => ({
    onLogin: () => login(),
    onRegister: () => register(),
    onCloseModal: () => closeModal(),
  }),
)(Page)
