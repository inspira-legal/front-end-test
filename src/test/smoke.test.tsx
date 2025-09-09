import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App skeleton', () => {
  it('renders setup message', () => {
    render(<App />)
    expect(screen.getByText('Front-end Interview Skeleton')).toBeInTheDocument()
  })
})

