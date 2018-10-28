import React, { Component } from 'react';

// import Circle from './Circle';
// import Rectangle from './Rectangle';

import Factory from '../../utils/Factory';

import { updateTypes } from '../../utils/updateTypes';

class SimpleGraphicsBase extends Component {
  
  handleDragging = (e) => {
    if (e.touches && e.touches[0]) {
      this.props.onUpdate(updateTypes.DRAGGING, {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
    } else {
      this.props.onUpdate(updateTypes.DRAGGING, {
        x: e.clientX,
        y: e.clientY
      });
    }
  }

  handleDragEnd = (e) => {
    this.props.onUpdate(updateTypes.DRAG_END, {
      isDragging: false
    });
  }

  render() {
    return (
      <svg 
        width={this.props.width} 
        height={this.props.height}
        onMouseMove={this.handleDragging}
        onMouseUp={this.handleDragEnd}
        onTouchMove={this.handleDragging}
        onTouchEnd={this.handleDragEnd} 
      >
        <rect width='100%' height='100%' fill={this.props.backgroundColor} />
        { this.props.graphics.map((g, i) => Factory.createGraphic(g, i, this.props.onUpdate)) }
      </svg>
    )
  }
}

export default SimpleGraphicsBase;