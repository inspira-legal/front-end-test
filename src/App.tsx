import { ApolloProvider } from '@apollo/client/react'
import { apolloClient } from './services/graphql'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="max-w-xl w-full bg-white rounded-xl shadow p-8 text-center space-y-2">
          <h1 className="text-2xl font-bold">Front-end Interview Skeleton</h1>
          <p className="text-gray-600">GraphQL, TypeScript, Vitest, Zustand are preconfigured.</p>
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App
