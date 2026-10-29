import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  test('renders header', () => {
    render(<App />)
    expect(screen.getByText(/Snake Field Demo/i)).toBeInTheDocument()
  })

  test('renders field size control', () => {
    render(<App />)
    expect(screen.getByText(/Размер поля:/i)).toBeInTheDocument()
  })

  test('renders initial snakes list', () => {
    render(<App />)
    expect(screen.getByText(/snake-1/i)).toBeInTheDocument()
    expect(screen.getByText(/snake-2/i)).toBeInTheDocument()
  })
})