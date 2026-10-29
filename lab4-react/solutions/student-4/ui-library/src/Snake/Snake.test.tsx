import { render } from '@testing-library/react'

import { Snake } from './Snake'

describe('Snake', () => {
  const segments = [
    { x: 2, y: 2 },
    { x: 1, y: 2 },
    { x: 0, y: 2 },
  ]

  test('renders all segments', () => {
    const { container } = render(
      <Snake segments={segments} direction="right" />,
    )

    const allSegments = container.querySelectorAll('[class*="segment"]')

    expect(allSegments.length).toBe(segments.length)
  })

  test('applies correct color', () => {
    const { container } = render(
      <Snake segments={segments} direction="right" color="#ff0000" />,
    )

    const firstSegment = container.querySelector('[class*="segment"]') as HTMLElement

    expect(firstSegment.style.backgroundColor).toBe('rgb(255, 0, 0)')
  })

  test('applies custom cell size', () => {
    const { container } = render(
      <Snake segments={segments} direction="right" cellSize={50} />,
    )

    const firstSegment = container.querySelector('[class*="segment"]') as HTMLElement

    expect(firstSegment.style.width).toBe('50px')
    expect(firstSegment.style.height).toBe('50px')
  })

  test('renders head with direction', () => {
    const { container } = render(
      <Snake segments={segments} direction="up" />,
    )

    const head = container.querySelector('[class*="head"]')

    expect(head).toHaveAttribute('data-direction', 'up')
  })
})