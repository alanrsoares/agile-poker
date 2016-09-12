import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import actionsMap from '../../actions'

import FlipCard from '../../components/FlipCard'

const App = ({ actions }) => (
  <div className="App">
    <section className="hero is-medium is-primary is-bold is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <p className="title">Hello</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default connect(
  state => ({ ...state }),
  dispatch => ({ actions: bindActionCreators(actionsMap, dispatch) })
)(App)
