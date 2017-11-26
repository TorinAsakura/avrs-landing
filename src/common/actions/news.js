import gql from 'graphql-tag'
import * as actions from '../constants/news'

export function load() {
  return async (dispatch, getState, client) => {
    const locale = getState().router.params.locale || 'en'
    const { limit, offset } = getState().news

    const { data } = await client.query({
      query: gql`
        query Posts ($language: String!, $pager: Pager!) {
          posts (language: $language, pager: $pager) {
            count
            rows {
              id
              slug
              title
              preview
              publishAt
            }
          }
        }
      `,
      variables: {
        language: locale,
        pager: {
          limit,
          offset,
        },
      },
    })

    dispatch({
      type: actions.load,
      ...data.posts,
    })
  }
}

export function loadDetail() {
  return async (dispatch, getState, client) => {
    const { slug } = getState().router.params

    const { data } = await client.query({
      query: gql`
        query Post ($slug: String!) {
          post (slug: $slug) {
            id
            slug
            title
            content
            publishAt
          }
        }
      `,
      variables: {
        slug,
      },
    })

    dispatch({
      type: actions.loadDetail,
      post: data.post,
    })
  }
}

export function loadPreview() {
  return async (dispatch, getState, client) => {
    const locale = getState().router.params.locale || 'en'

    const { data } = await client.query({
      query: gql`
        query Posts ($language: String!, $pager: Pager!) {
          posts (language: $language, pager: $pager) {
            count
            rows {
              id
              slug
              title
              shortDescription
            }
          }
        }
      `,
      variables: {
        language: locale,
        pager: {
          limit: 1,
          offset: 0,
        },
      },
    })

    dispatch({
      type: actions.loadPreview,
      preview: data.posts.rows[0] || {},
    })
  }
}
