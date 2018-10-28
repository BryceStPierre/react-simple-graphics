import React from 'react';

import SimpleGraphic from './SimpleGraphic';

class Rectangle extends SimpleGraphic {
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