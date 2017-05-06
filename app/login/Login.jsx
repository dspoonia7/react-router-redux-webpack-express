import React from 'react'
import { connect } from 'react-redux'

import {  updateText } from '../actions/user'

@connect((state) => {
  return {
    user: state.user
  }
})
export default class Login extends React.Component {

  updateText = (e) => {
    this.props.dispatch(updateText(e.target.value))
  }

  render() {
    const { user } = this.props

    return (
      <div className="page-wrapper">
        <div>Login! </div>
      </div>
    )
  }
}
