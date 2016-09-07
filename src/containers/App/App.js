import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import actionsMap from '../../actions'

import './App.css'

import Flip from '../../components/Flip'
import PokerCard from '../../components/PokerCard'

const App = ({ actions, flip, auth }) => (
  <div className="App">
    AGILE POKER

    <Flip width={150} height={200} flip={flip}>
      <PokerCard width={150} height={200}>Boo</PokerCard>
      <PokerCard width={150} height={200}></PokerCard>
    </Flip>

    <button className="button primary" onClick={() => actions.toggleFlip()}>flip card</button>

    <button className="button primary" onClick={() => actions.authOpen()}>open auth</button>

    <div>
      {JSON.stringify(auth)}
    </div>
  </div>
)

export default connect(
  state => ({ ...state }),
  dispatch => ({ actions: bindActionCreators(actionsMap, dispatch) })
)(App)
