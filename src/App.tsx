import { ApolloProvider } from '@apollo/client/react'
import { apolloClient } from './services/graphql'
import UserSearch from './components/UserSearch'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="min-h-screen bg-gray-50">
        <div className="py-12">
          <UserSearch />
        </div>
        
        <div className="max-w-4xl mx-auto p-6 mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg text-blue-600">⚡ Vite</h3>
                <p className="text-sm text-gray-600">Fast build tool and dev server</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg text-blue-600">⚛️ React 19</h3>
                <p className="text-sm text-gray-600">Latest React with concurrent features</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg text-blue-600">📘 TypeScript</h3>
                <p className="text-sm text-gray-600">Static type checking</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg text-blue-600">🎨 Tailwind CSS</h3>
                <p className="text-sm text-gray-600">Utility-first CSS framework</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg text-blue-600">🚀 GraphQL</h3>
                <p className="text-sm text-gray-600">Apollo Client for data fetching</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg text-blue-600">🐻 Zustand</h3>
                <p className="text-sm text-gray-600">Lightweight state management</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg text-blue-600">🧪 Vitest</h3>
                <p className="text-sm text-gray-600">Fast unit testing framework</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App
