import React from 'react';

import Shape from './Shape';

class Circle extends Shape {

  render () {
    const { position, r, fill } = this.props;

    return (
      <circle cx={position[0]} cy={position[1]} r={r} fill={fill} onMouseDown={this.mouseDown} />
    );
  }
}

export default Circle;