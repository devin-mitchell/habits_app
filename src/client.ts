import { ApolloClient, InMemoryCache } from '@apollo/client'

import { getEnv } from './env'

// TODO: add prod uri once its created
const uri = getEnv() === 'development' ? 'http://localhost:4000' : ''

const client = new ApolloClient({
  uri: `${uri}/api`,
  cache: new InMemoryCache(),
})

export default client
