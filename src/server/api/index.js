import 'isomorphic-fetch'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import config from '../config'

const networkInterface = createNetworkInterface({ uri: config.get('api:url') })

export default new ApolloClient({
  networkInterface,
})
