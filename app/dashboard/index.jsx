import React from 'react'
import { connect } from 'react-redux'

import {  updateText } from '../actions/user'

@connect((state) => {
  return {
    user: state.user
  }
})
export default class Dashboard extends React.Component {

  updateText = (e) => {
    this.props.dispatch(updateText(e.target.value))
  }

  render() {
    const { user } = this.props

    return (
      <div className="page-wrapper">
        <div>Dashboard! </div>
        <br />
        <div>
          Enter your name:
          <input value={user.name} onChange={(e) => this.updateText(e)} />
        </div>
        <br />
        <div>Name: <b>{user.name}</b>.</div>
      </div>
    )
  }
}
