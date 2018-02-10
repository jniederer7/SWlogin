import React, { Component } from 'react'

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        <p>Welcome to StockWatch. You are securely logged in!</p>
        <a href="http://localhost:3000"><img src="images/back.jpg" /></a>
      </div>
    )
  }
}