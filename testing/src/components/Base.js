import React, { Component } from 'react'

import Circle from './Circle';
import Rectangle from './Rectangle';

class Base extends Component {
  
  handleDragging = (e) => {
    if (e.touches && e.touches[0]) {
      this.props.onUpdate(-2, {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
    } else {
      this.props.onUpdate(-2, {
        x: e.clientX,
        y: e.clientY
      });
    }
  }

  handleDragEnd = (e) => {
    this.props.onUpdate(-1, {
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
        {
          this.props.graphics.map((g, i) => {
            if (g.type === 'Circle')
              return <Circle {...g.data} key={i} index={i} onUpdate={this.props.onUpdate} />;
            else if (g.type === 'Rectangle')
              return <Rectangle {...g.data} key={i} index={i} onUpdate={this.props.onUpdate} />;
          })
        }
      </svg>
    )
  }
}

export default Base;