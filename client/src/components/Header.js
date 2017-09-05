import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li>
            <a href="/auth/google">Login with google</a>
          </li>
        )
      default:
        return (
          <div>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </div>
        )
    }
  }
  render() {
    return (
      <div>
        <h2>Header</h2>
        <Link to={this.props.auth ? "/sessions" : "/"}>Portal</Link>
        <ul>{this.renderContent()}</ul>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(Header)