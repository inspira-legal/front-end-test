import { useQuery } from '@apollo/client/react'
import { GET_USER } from '../services/queries'
import { useUserStore } from '../stores/userStore'
import { useEffect } from 'react'

export interface GitHubUser {
  id: string
  login: string
  name: string
  email: string
  avatarUrl: string
  bio: string
  company: string
  location: string
  websiteUrl: string
  twitterUsername: string
  followers: {
    totalCount: number
  }
  following: {
    totalCount: number
  }
  repositories: {
    totalCount: number
    nodes: Array<{
      id: string
      name: string
      description: string
      url: string
      stargazerCount: number
      forkCount: number
      primaryLanguage: {
        name: string
        color: string
      }
      updatedAt: string
    }>
  }
}

interface GetUserData {
  user: GitHubUser
}

interface UseUserQueryResult {
  data: GitHubUser | undefined
  loading: boolean
  error: Error | undefined
}

export function useUserQuery(login: string): UseUserQueryResult {
  const { data, loading, error } = useQuery<GetUserData>(GET_USER, {
    variables: { login },
    skip: !login,
  })

  const { setUser, setLoading, setError } = useUserStore()

  useEffect(() => {
    setLoading(loading)
    setError(error?.message || null)
    if (data?.user) {
      setUser({
        id: data.user.id,
        name: data.user.name || data.user.login,
        email: data.user.email || '',
      })
    }
  }, [data, loading, error, setUser, setLoading, setError])

  return {
    data: data?.user,
    loading,
    error,
  }
}