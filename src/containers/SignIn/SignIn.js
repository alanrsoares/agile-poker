import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import actionsMap from '../../actions'

import Flip from '../../components/Flip'
import PokerCard from '../../components/PokerCard'

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        SignIn

        <button className="button primary" onClick={() => this.props.actions.authOpen()}>
          open auth
        </button>

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
)(SignIn)
