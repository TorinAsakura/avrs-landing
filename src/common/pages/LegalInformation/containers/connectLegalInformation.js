import { connect } from 'react-redux'

export default connect(
  (state) => {
    const slug = (state.router.params.slug || '').replace(/-/g, '_')

    return {
      content: state.intl.content[slug] || '',
    }
  },
)
