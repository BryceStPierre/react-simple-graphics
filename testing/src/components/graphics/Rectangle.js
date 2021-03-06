import React from 'react';

import Graphic from './Graphic';

class Rectangle extends Graphic {

  static handleDragging = (data, inputs) => {
    data.x = inputs.x;
    data.y = inputs.y;
    return data;
  }

  static handleScaling = (data, inputs) => {
    data.width = inputs.x - data.x;
    data.height = inputs.y - data.y;
    return data;
  }

  render() {
    return (
      <g>
        {
          this.props.isSelected && <rect
            x={this.props.x}
            y={this.props.y}
            width={this.props.width}
            height={this.props.height}
            fill='none'
            stroke='#111'
            strokeWidth={4}
          />
        }
        <rect 
          className='g'
          x={this.props.x} 
          y={this.props.y} 
          width={this.props.width}
          height={this.props.height}
          fill={this.props.fill}
          onClick={this.handleSelect}
          onMouseDown={this.handleDragStart} 
          onTouchStart={this.handleDragStart}
        />
        {
          this.props.isSelected && <polygon 
            className='resize-handle'
            points={[
              { x: this.props.x + this.props.width, y: this.props.y + this.props.height },
              { x: this.props.x + this.props.width - 12, y: this.props.y + this.props.height },
              { x: this.props.x + this.props.width, y: this.props.y + this.props.height - 12 }
            ].map(p => `${p.x},${p.y}`).join(" ")}
            fill='#111'
            onMouseDown={this.handleScaleStart}
            onTouchStart={this.handleScaleStart}
          />
        }
      </g>
    );
  }
}

export default Rectangle;