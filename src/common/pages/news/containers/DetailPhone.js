import React from 'react'
import { connect } from 'react-redux'
import { loadDetail } from '../../../actions/news'
import Detail from '../components/Detail'

const Container = props => (
  <Detail
    {...props}
    offset={20}
  />
)

export default connect(
  state => state.news.detail,
  dispatch => ({
    onLoad: () => dispatch(loadDetail()),
  }),
)(Container)
