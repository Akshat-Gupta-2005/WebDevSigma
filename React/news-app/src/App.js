import React, { Component } from 'react'
import NavBar from './components/NavBar'
 import NewsCont from './components/NewsCont'

export default class App extends Component {
  // c = "Akshat";
  render() {
    return (
      <>
        {/* Hello {this.c} */}

        <NavBar />

        <NewsCont/>
      </>
    )
  }
}

