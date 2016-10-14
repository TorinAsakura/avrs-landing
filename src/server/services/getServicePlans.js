import gql from 'graphql-tag'
import client from '../api'

export default async () => {
  const { data } = await client.query({
    query: gql`
      query {
        servicePlans {
          id
          type
          name
          time
          price
          period
          profitability
          profitabilityPerDay
          profitabilityPerHour
          profit
          amount
          memory
          cpu {
            from
            to
          }
        }
      }
    `,
  })

  return data.servicePlans
}
