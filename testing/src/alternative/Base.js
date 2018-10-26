import React, { Component } from 'react'

export default class Base extends Component {
  
  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
          <rect width='100%' height='100%' fill={this.props.fill} />
          {this.props.children}
      </svg>
    )
  }
}
