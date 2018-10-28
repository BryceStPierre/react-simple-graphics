import React from 'react';

import SimpleGraphic from './SimpleGraphic';

class Circle extends SimpleGraphic {
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