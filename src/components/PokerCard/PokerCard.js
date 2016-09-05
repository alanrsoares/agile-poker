import React from 'react';
import './PokerCard.css';

const PokerCard = ({ children }) => (
  <div className="poker-card">
    <div className="poker-card-body">
      {children}
    </div>
  </div>
);

export default PokerCard;
