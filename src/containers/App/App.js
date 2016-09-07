import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import actionsMap from '../../actions'

import './App.css'

import Flip from '../../components/Flip'
import PokerCard from '../../components/PokerCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        AGILE POKER

        <Flip width={150} height={200} flip={this.props.flip}>
          <PokerCard width={150} height={200}>Foo</PokerCard>
          <PokerCard width={150} height={200}>Bar</PokerCard>
        </Flip>

        <button className="button primary" onClick={() => this.props.actions.toggleFlip()}>flip card</button>

        <button className="button primary" onClick={() => this.props.actions.authOpen()}>open auth</button>

        <div>
          {JSON.stringify(this.props.auth)}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({ ...state }),
  dispatch => ({ actions: bindActionCreators(actionsMap, dispatch) })
)(App)
