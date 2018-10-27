import React, { Component } from 'react'

export default class Base extends Component {
  
  render() {
    console.log(this.props.children);

    return (
      <svg width={this.props.width} height={this.props.height}>
          <rect width='100%' height='100%' fill={this.props.background} />
          {this.props.children}
      </svg>
    )
  }
}
