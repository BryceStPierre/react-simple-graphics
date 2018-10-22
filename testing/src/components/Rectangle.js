import React from 'react';

import Shape from './Shape';

class Rectangle extends Shape {

  render () {
    const { position, width, height } = this.props;

    return (
      <rect 
        x={position[0]} 
        y={position[1]} 
        width={width} 
        height={height} />
    );
  }
}

export default Rectangle;