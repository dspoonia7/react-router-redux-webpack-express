import React from 'react'
import { connect } from 'react-redux'

@connect((state) => {
  return {
    user: state.user
  }
})
export default class Stats extends React.Component {

  render() {
    const { user } = this.props

    return (
      <div className="page-wrapper">
        <div>Stats! </div>
        <br />
        <div>Entered name at Dashboard: <b>{user.name}</b>.</div>
      </div>
    )
  }
}
