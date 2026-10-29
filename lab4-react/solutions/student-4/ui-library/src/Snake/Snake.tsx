import React from 'react'

import styles from './Snake.module.css'

export type Direction = 'up' | 'down' | 'left' | 'right'

export interface Segment {
  x: number;
  y: number;
}

export interface SnakeProps {
  segments: Segment[];
  direction: Direction;
  color?: string;
  cellSize?: number;
}

export const Snake: React.FC<SnakeProps> = ({
  segments,
  direction,
  color = '#4caf50',
  cellSize = 30,
}) => {
  const head = segments[0]

  return (
    <>
      {segments.map((segment, index) => {
        const isHead = index === 0

        return (
          <div
            key={`${segment.x}-${segment.y}-${index}`}
            className={`${styles.segment} ${isHead ? styles.head : ''}`}
            style={{
              left: `${segment.x * cellSize}px`,
              top: `${segment.y * cellSize}px`,
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              backgroundColor: color,
            }}
            data-direction={isHead ? direction : undefined}
          />
        )
      })}
      {head && (
        <div
          className={styles.eyes}
          style={{
            left: `${head.x * cellSize}px`,
            top: `${head.y * cellSize}px`,
            width: `${cellSize}px`,
            height: `${cellSize}px`,
          }}
        >
          <span className={styles.eye} />
          <span className={styles.eye} />
        </div>
      )}
    </>
  )
}