import React, { Component } from 'react';

import Factory from '../utils/Factory';
import { updateTypes } from '../utils/updateTypes';

class Base extends Component {
  
  handleClick = (e) => {
    this.props.onBaseUpdate();
  }

  handleDragging = (e) => {
    if (e.touches && e.touches[0]) {
      this.props.onGraphicUpdate(updateTypes.DRAGGING, {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });

      this.props.onGraphicUpdate(updateTypes.SCALING, {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });

    } else {
      this.props.onGraphicUpdate(updateTypes.DRAGGING, {
        x: e.clientX,
        y: e.clientY
      });

      this.props.onGraphicUpdate(updateTypes.SCALING, {
        x: e.clientX,
        y: e.clientY
      });
    }
  }

  handleDragEnd = (e) => {
    this.props.onGraphicUpdate(updateTypes.DRAG_END, {
      isDragging: false
    });
    this.props.onGraphicUpdate(updateTypes.SCALE_END, {
      isScaling: false
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
        <rect 
          width='100%' 
          height='100%' 
          fill={this.props.backgroundColor} 
          onClick={this.handleClick}
        />
        { this.props.graphics.map((g, i) => Factory.renderGraphic(g, i, this.props.onGraphicUpdate)) }
      </svg>
    )
  }
}

export default Base;