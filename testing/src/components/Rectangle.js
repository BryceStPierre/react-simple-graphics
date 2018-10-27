import React from 'react';
import Shape from './Shape';

class Rectangle extends Shape {
  render() {
    return (
      <rect 
        x={this.props.x} 
        y={this.props.y} 
        width={this.props.width}
        height={this.props.height}
        fill={this.props.fill} 
        onMouseDown={this.handleDragStart} 
        onTouchStart={this.handleDragStart}
      />
    );
  }
}

export default Rectangle;