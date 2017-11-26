import gql from 'graphql-tag'
import { lensPath, set } from 'ramda'
import * as actions from '../constants/support'
import { send as sendMessage } from './messages'

const formatErrors = (errors = []) =>
  errors.reduce((result, error) => set(lensPath(error.key), error.message, result), {})

const getValidationErrors = (error) => {
  const [validation] = (error.graphQLErrors || []).filter(({ type }) => type === 'validation')

  if (validation) {
    return formatErrors(validation.errors)
  }

  return null
}

export function change(field, value) {
  return {
    type: actions.change,
    field,
    value,
  }
}

export function send() {
  return async (dispatch, getState, client) => {
    const { email, subject, message } = getState().support

    try {
      await client.mutate({
        mutation: gql`
          mutation createExternalSupportRequest($email: String!, $subject: String!, $message: String!) {
            createExternalSupportRequest(email: $email, subject: $subject, message: $message) {
              id
            }
          }
        `,
        variables: {
          email,
          subject,
          message,
        },
      })

      dispatch(sendMessage({ message: 'Запрос успешно отправлен' }))

      dispatch({
        type: actions.clear,
      })
    } catch (error) {
      const errors = getValidationErrors(error)

      if (errors) {
        dispatch({
          type: actions.setErrors,
          errors,
        })
      }
    }
  }
}
