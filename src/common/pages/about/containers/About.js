import { connect } from 'react-redux'
import About from '../components/About'

export default connect(
  state => ({
    question: state.router.params.question,
    content: state.intl.content.about,
  }),
)(About)
