import { useState } from 'react'
import { useUserQuery } from '../hooks/useUserQuery'
import UserProfile from './UserProfile'

export default function UserSearch() {
  const [login, setLogin] = useState('')
  const [searchLogin, setSearchLogin] = useState('')

  const { data: user, loading, error } = useUserQuery(searchLogin)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (login.trim()) {
      setSearchLogin(login.trim())
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        GitHub User Search
      </h1>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="login" className="sr-only">
              GitHub username
            </label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Enter GitHub username..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            disabled={loading || !login.trim()}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {searchLogin && (
        <>
          {loading && (
            <div className="flex justify-center items-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error loading user</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{error.message}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {user && !loading && (
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={user.avatarUrl}
                  alt={user.name || user.login}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {user.name || user.login}
                  </h2>
                  <p className="text-gray-500">@{user.login}</p>
                </div>
              </div>
              
              {user.bio && (
                <p className="text-gray-700 mb-4">{user.bio}</p>
              )}
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                {user.company && (
                  <span>🏢 {user.company}</span>
                )}
                {user.location && (
                  <span>📍 {user.location}</span>
                )}
                {user.email && (
                  <span>✉️ {user.email}</span>
                )}
              </div>
              
              <div className="flex gap-6 mt-4 text-sm">
                <span className="text-gray-600">
                  <strong>{user.followers.totalCount}</strong> followers
                </span>
                <span className="text-gray-600">
                  <strong>{user.following.totalCount}</strong> following
                </span>
                <span className="text-gray-600">
                  <strong>{user.repositories.totalCount}</strong> repositories
                </span>
              </div>
            </div>
          )}

          <UserProfile login={searchLogin} />
        </>
      )}
    </div>
  )
}