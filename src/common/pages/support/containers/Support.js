import { connect } from 'react-redux'
import { change, send } from '../../../actions/support'
import Support from '../components/Support'

export default connect(
  state => ({
    email: state.support.email,
    subject: state.support.subject,
    message: state.support.message,
    errors: state.support.errors,
  }),
  dispatch => ({
    onChangeEmail: value => dispatch(change('email', value)),
    onChangeSubject: value => dispatch(change('subject', value)),
    onChangeMessage: value => dispatch(change('message', value)),
    onSend: () => dispatch(send()),
  }),
)(Support)
