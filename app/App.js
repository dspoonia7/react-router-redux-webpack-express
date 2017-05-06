import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'

import styles from './styles/App.scss';

export default class App extends React.Component {

  render() {
    const { children } = this.props

    return (
      <div>
        <header>
          <div className="nav-link">
            <Link to="/" activeClassName="active-page" onlyActiveOnIndex>Dashboard</Link>
          </div>
          <div className="nav-link">
            <Link to="/stats" activeClassName="active-page" onlyActiveOnIndex>Stats</Link>
          </div>
          <div className="nav-link">
            <Link to="/login" activeClassName="active-page" onlyActiveOnIndex>Login</Link>
          </div>
        </header>
        <br />
        <div className="app-content" style={{ marginTop: '1.5em' }}>{children}</div>
      </div>
    );
  }
}
