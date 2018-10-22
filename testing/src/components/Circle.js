import React from 'react';

import Shape from './Shape';

class Circle extends Shape {

  render () {
    const { x, y, r, fill } = this.props;

    return (
      <circle cx={x} cy={y} r={r} fill={fill} onMouseDown={this.mouseDown} />
    );
  }
}

export default Circle;