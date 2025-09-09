import { describe, it, expect, beforeEach } from 'vitest'
import { useUserStore } from '../stores/userStore'

describe('userStore', () => {
  beforeEach(() => {
    useUserStore.getState().clearUser()
  })

  it('should initialize with null user', () => {
    const state = useUserStore.getState()
    
    expect(state.user).toBe(null)
    expect(state.loading).toBe(false)
    expect(state.error).toBe(null)
  })

  it('should set user', () => {
    const testUser = {
      id: '1',
      name: 'Test User',
      email: 'test@example.com'
    }
    
    useUserStore.getState().setUser(testUser)
    const state = useUserStore.getState()
    
    expect(state.user).toEqual(testUser)
  })

  it('should set loading state', () => {
    useUserStore.getState().setLoading(true)
    const state = useUserStore.getState()
    
    expect(state.loading).toBe(true)
  })

  it('should set error', () => {
    const errorMessage = 'Test error'
    
    useUserStore.getState().setError(errorMessage)
    const state = useUserStore.getState()
    
    expect(state.error).toBe(errorMessage)
  })

  it('should clear user and error', () => {
    const testUser = {
      id: '1',
      name: 'Test User',
      email: 'test@example.com'
    }
    
    useUserStore.getState().setUser(testUser)
    useUserStore.getState().setError('Some error')
    useUserStore.getState().clearUser()
    
    const state = useUserStore.getState()
    
    expect(state.user).toBe(null)
    expect(state.error).toBe(null)
  })
})