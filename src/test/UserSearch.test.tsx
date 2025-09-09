import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import UserSearch from '../components/UserSearch'

// Mock Apollo Client
vi.mock('@apollo/client/react', () => ({
  useQuery: () => ({
    data: null,
    loading: false,
    error: null
  })
}))

describe('UserSearch', () => {
  it('renders search form', () => {
    render(<UserSearch />)

    expect(screen.getByText('GitHub User Search')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter GitHub username...')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })
})