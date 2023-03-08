import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
        <>
      <div>{this.props.data1}</div>
      <h1>{this.props.number1}{this.props.boolean1}{this.props.data4}</h1>
      </>
    )
  }
}
