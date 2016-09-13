import React from 'react'
import { connect } from 'react-redux'


const Session = ({ auth, params }) => (
  <div className="container">
    Foo: {params.id}
  </div>
)

export default connect(
  state => ({ ...state })
)(Session)
