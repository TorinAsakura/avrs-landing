import { connect } from 'react-redux'
import { login, register } from '../../../actions'

export default connect(
  state => ({
    query: state.router.location.query,
  }),
  (dispatch, { router }) => ({
    onLogin: () => login(),
    onRegister: () => register(),
    onGoToAbout: () => router.push('/about'),
  }),
)
