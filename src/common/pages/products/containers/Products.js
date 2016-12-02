import { connect } from 'react-redux'
import { register } from '../../../actions'
import Products from '../components/Products'

export default connect(
  null,
  () => ({
    onRegister: () => register(),
  }),
)(Products)
