import { render } from '@testing-library/react'

import { GameField } from './GameField'

describe('GameField', () => {
  test('renders grid with correct size', () => {
    const { container } = render(<GameField size={10} snakes={[]} />)

    const cells = container.querySelectorAll('[class*="cell"]')

    expect(cells.length).toBe(100) // 10 * 10
  })

  test('applies correct field dimensions', () => {
    const { container } = render(
      <GameField size={10} snakes={[]} cellSize={30} />,
    )

    const field = container.firstChild as HTMLElement

    expect(field.style.width).toBe('300px')
    expect(field.style.height).toBe('300px')
  })

  test('renders snakes', () => {
    const snakes = [
      {
        id: 'snake-1',
        segments: [{ x: 1, y: 1 }, { x: 0, y: 1 }],
        direction: 'right' as const,
        color: '#4caf50',
      },
    ]

    const { container } = render(<GameField size={10} snakes={snakes} />)

    const segments = container.querySelectorAll('[class*="segment"]')

    expect(segments.length).toBe(2)
  })

  test('renders multiple snakes', () => {
    const snakes = [
      {
        id: 'snake-1',
        segments: [{ x: 1, y: 1 }],
        direction: 'right' as const,
      },
      {
        id: 'snake-2',
        segments: [{ x: 5, y: 5 }],
        direction: 'left' as const,
      },
    ]

    const { container } = render(<GameField size={10} snakes={snakes} />)

    const segments = container.querySelectorAll('[class*="segment"]')

    expect(segments.length).toBe(2)
  })
})