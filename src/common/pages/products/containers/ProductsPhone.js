import { connect } from 'react-redux'
import { register } from '../../../actions'
import Products from '../components/ProductsPhone'

export default connect(
  null,
  () => ({
    onRegister: () => register(),
  }),
)(Products)
