import gql from 'graphql-tag'
import * as actions from '../constants/support'
import { send as sendMessage } from './messages'

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

    const { data } = await client.mutate({
      mutation: gql`
        mutation createExternalSupportRequest($email: String!, $subject: String!, $message: String!) {
          createExternalSupportRequest(email: $email, subject: $subject, message: $message) {
            errors {
              key
              message
            }
            request {
              id
            }
          }
        }
      `,
      variables: {
        email,
        subject,
        message,
      },
    })

    if (data.createExternalSupportRequest.errors.length > 0) {
      dispatch({
        type: actions.setErrors,
        errors: data.createExternalSupportRequest.errors,
      })
    } else {
      dispatch(sendMessage({ message: 'Запрос успешно отправлен' }))

      dispatch({
        type: actions.clear,
      })
    }
  }
}
