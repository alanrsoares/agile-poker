import React from 'react'
import Flip from '../Flip'
import PokerCard from '../PokerCard'

import './FlipCard.css'

import logo from './logo.svg'

const FlipCard = ({ width, height, flip, children }) => (
  <Flip width={width} height={height} flip={flip}>
    <PokerCard width={width} height={height}>
      {children}
    </PokerCard>
    <PokerCard width={width} height={height}>
      <img src={logo} className="back-logo" alt="logo" />
    </PokerCard>
  </Flip>
)

export default FlipCard
