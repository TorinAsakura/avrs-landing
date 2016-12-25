import ApolloClient, { createNetworkInterface } from 'apollo-client'

export default (uri) => {
  const networkInterface = createNetworkInterface({ uri })

  const client = new ApolloClient({
    networkInterface,
  })

  return client
}
