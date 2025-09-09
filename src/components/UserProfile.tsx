import { useUserStore } from '../stores/userStore'

interface UserProfileProps {
  login: string
}

export default function UserProfile({ login }: UserProfileProps) {
  const { user, loading, error } = useUserStore()

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 m-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Error loading user</h3>
            <div className="mt-2 text-sm text-red-700">
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">No user data available</p>
      </div>
    )
  }

  return (
    <div className="bg-white shadow rounded-lg p-6 m-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white font-medium text-lg">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-500">@{login}</p>
          {user.email && (
            <p className="text-sm text-gray-500">{user.email}</p>
          )}
        </div>
      </div>
    </div>
  )
}