import React from 'react';
import Shape from './Shape';

class Circle extends Shape {
  render () {
    return (
      <circle 
        cx={this.props.x} 
        cy={this.props.y} 
        r={this.props.r} 
        fill={this.props.fill} 
        onMouseDown={this.handleDragStart}
        onTouchStart={this.handleDragStart}
      />
    );
  }
}

export default Circle;