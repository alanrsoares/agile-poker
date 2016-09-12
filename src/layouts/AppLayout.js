import React from 'react'
import { Link } from 'react-router'

const AppLayout = ({ children }) => (
  <div>
    <section className="hero is-dark is-bold">
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
                  <i className="fa fa-github"></i>
                </span>
              </a>
            </div>
            <div className="nav-right nav-menu">
              <Link to="/" className="nav-item" activeClassName="is-active">
                Home
              </Link>
              <Link to="/dashboard" className="nav-item" activeClassName="is-active">
                Dashboard
              </Link>
            </div>
            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </nav>
        </div>
      </div>
    </section>
    <section className="">
      {children}
    </section>
  </div>
)

export default AppLayout
