import React from 'react'
import './Flip.css'

const Flip = ({ width, height, flip, children }) => (
  <div
    className="flip-container"
    style={{
      width,
      height,
      perspective: `${width * 3}px`
    }}
  >
    <div
      className="flipper"
      style={{
        transform: flip && 'rotateY(180deg)'
      }}
    >
      <div className="front">
        {children[0]}
      </div>
      <div className="back">
        {children[1]}
      </div>
    </div>
  </div>
)

export default Flip
