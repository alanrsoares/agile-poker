import React, { Component } from 'react';
import './App.css';

import Flip from '../../components/Flip';
import PokerCard from '../../components/PokerCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        AGILE POKER

        <Flip width={150} height={80} flip>
          <PokerCard>Foo</PokerCard>
          <PokerCard>Bar</PokerCard>
        </Flip>
      </div>
    );
  }
}

export default App;
