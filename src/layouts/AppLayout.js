import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import './AppLayout.css'

const NavToggle = () => (
  <span className="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>
)

const NavItem = ({ to, children}) => (
  <Link to={to} className="nav-item" activeClassName="is-active">
    {children}
  </Link>
)

const Icon = ({ type }) => (
  <i className={`fa fa-${type}`}></i>
)

const SignInButton = ({ status }) => (
  <span className="nav-item">
    <button className="button is-outlined is-light">
      {status === 'AUTH_LOGGED_IN' ? 'LOG OUT' : 'SIGN IN'}
    </button>
  </span>
)

const AppLayout = ({ children, auth }) => (
  <div>
    <section className="hero is-dark is-bold is-fixed">
      <div className="hero-head">
        <div className="container">
          <nav className="nav">
            <div className="nav-left">
              <Link to="/" className="nav-item is-brand">
                POKER CARDS
              </Link>
            </div>
            <div className="nav-center">
              <a className="nav-item" href="https://github.com/alanrsoares/agile-poker">
                <span className="icon">
                  <Icon type="github" />
                </span>
              </a>
            </div>
            <div className="nav-right nav-menu">
              <NavItem to="/">
                Home
              </NavItem>
              <NavItem to="/dashboard">
                Dashboard
              </NavItem>
              <SignInButton {...auth} />
            </div>
            <NavToggle />
          </nav>
        </div>
      </div>
    </section>
    <section>
      {children}
    </section>
  </div>
)

export default connect(
  state => ({ ...state })
)(AppLayout)
