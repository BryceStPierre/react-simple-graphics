import React from 'react';

import Shape from './Shape';

class Rectangle extends Shape {

  render () {
    const { x, y, width, height, fill } = this.props;

    return (
      <rect 
        x={x} 
        y={y} 
        width={width} 
        height={height} 
        fill={fill} onMouseDown={this.mouseDown} />
    );
  }
}

export default Rectangle;