import React from 'react';

import Shape from './Shape';

class Circle extends Shape {

  constructor(props) {
    super(props);
  
    this.state = {
       x: props.x,
       y: props.y,
       r: props.r,
       fill: props.fill,
       isMouseDown: false
    }
  }

  render () {
    const { x, y, r, fill } = this.state;

    return (
      <circle 
        cx={x} 
        cy={y} 
        r={r} 
        fill={fill} 
        onMouseDown={this.dragStart} 
        onMouseMove={this.dragging} 
        onMouseUp={this.dragEnd} 
        onTouchStart={this.dragStart}
        onTouchMove={this.dragging}
        onTouchEnd={this.dragEnd} 
      />
    );
  }
}

export default Circle;