import { connect } from 'react-redux'
import { IntlProvider as BaseIntlProvider } from 'react-intl'

class IntlProvider extends BaseIntlProvider {
  componentWillReceiveProps(nextProps) {
    if (nextProps.messages !== this.props.messages) {
      this.setState({ refresh: true }, () => this.setState({ refresh: false }))
    }
  }

  render() {
    if (this.state.refresh) {
      return null
    }

    return super.render()
  }
}

export default connect(
  state => ({
    defaultLocale: 'ru',
    locale: state.router.params.locale || 'en',
    messages: state.intl.messages,
  }),
)(IntlProvider)
