import React from 'react'
import { Column, Layout } from 'flex-layouts'
import { connect } from 'react-redux'
import { loadDetail } from '../../../actions/news'
import Detail from '../components/Detail'

const Container = props => (
  <Column>
    <Layout grow={1} />
    <Layout basis='900px'>
      <Detail {...props} />
    </Layout>
    <Layout grow={1} />
  </Column>
)

export default connect(
  state => state.news.detail,
  dispatch => ({
    onLoad: () => dispatch(loadDetail()),
  }),
)(Container)
