import React from 'react';

import Graphic from './Graphic';

class Rectangle extends Graphic {
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
              [this.props.x + this.props.width, this.props.y + this.props.height],
              [this.props.x + this.props.width - 12, this.props.y + this.props.height],
              [this.props.x + this.props.width, this.props.y + this.props.height - 12]
            ].map(v => `${v[0]},${v[1]}`).join(" ")}
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