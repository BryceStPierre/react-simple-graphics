import React from 'react';

import Graphic from './Graphic';

class Rectangle extends Graphic {
  render() {
    return (
      <rect 
        className='g'
        x={this.props.x} 
        y={this.props.y} 
        width={this.props.width}
        height={this.props.height}
        fill={this.props.fill} 
        stroke='black'
        strokeWidth={this.props.isSelected ? 3 : 0}
        onClick={this.handleSelect}
        onMouseDown={this.handleDragStart} 
        onTouchStart={this.handleDragStart}
      />
    );
  }
}

export default Rectangle;