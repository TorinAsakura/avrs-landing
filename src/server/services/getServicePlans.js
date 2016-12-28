import gql from 'graphql-tag'
import client from '../api'

export default async () => {
  const { data } = await client.query({
    query: gql`
      query {
        servicePlans {
          type
          period
          time
          price
          profitabilityPerDay
          profitabilityPerHour
          amount
          memory
          cpu
        }
      }
    `,
  })

  return data.servicePlans
}
