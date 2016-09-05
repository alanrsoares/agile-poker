import React, { Component, PropTypes } from 'react'
import './Flip.css'

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

const Flip = ({ width, height }) => (
  <div class="flip-container" style={{ width, height, perspective: `${width * 3}px`}}>
    <div class="flipper">
      <div class="front">
        {frontComponent}
      </div>
      <div class="back">
        {backComponent}
      </div>
    </div>
  </div>
)

export default Flip
