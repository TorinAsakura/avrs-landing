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
          profitability
          profitabilityPerDay
          profitabilityPerHour
          profit
          amount
          memory
          cpu
        }
      }
    `,
  })

  return data.servicePlans
}
