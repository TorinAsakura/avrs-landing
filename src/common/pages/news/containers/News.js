import { connect } from 'react-redux'
import News from '../components/News'

export default connect(
  state => ({
    news: Object.keys(state.news).reduce((result, key) => result.concat([state.news[key]]), []),
  }),
)(News)
