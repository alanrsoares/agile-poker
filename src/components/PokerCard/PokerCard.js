import React from 'react'
import './PokerCard.css'

const PokerCard = ({ width, height, children }) => (
  <div className="poker-card" style={{ width, height }}>
    <div className="poker-card-body">
      {children}
    </div>
  </div>
)

export default PokerCard
