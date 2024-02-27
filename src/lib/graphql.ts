import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, concat } from "@apollo/client";

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN

  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    }
  })

  return forward(operation)
})

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
})

export { client }