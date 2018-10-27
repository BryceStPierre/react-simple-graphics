import React from 'react';

import Shape from './Shape';

export default class Rectangle extends Shape {

  constructor(props) {
    super(props);
  
    this.state = {
      x: props.x,
      y: props.y,
      width: props.width,
      height: props.height,
      fill: props.fill,
      isMouseDown: false
    }
  }

  positionModification = (isX) => {
    return isX ? (this.state.width / -2) : (this.state.height / -2);
  }
  
  render() {
    const { x, y, width, height, fill } = this.state;

    return (
      <rect 
        x={x} 
        y={y} 
        width={width}
        height={height}
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
