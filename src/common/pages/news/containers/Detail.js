import { connect } from 'react-redux'
import Detail from '../components/Detail'

export default connect(
  state => state.news[state.router.params.slug] || {},
)(Detail)
