import React, { Component } from 'react'

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to StockWatch. You are securely logged in!</h1>
        <a href="https://stockwatch-main.herokuapp.com/"><img src="images/back.jpg" /></a>
      </div>
    )
  }
}