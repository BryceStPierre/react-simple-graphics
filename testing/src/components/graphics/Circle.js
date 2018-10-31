import React from 'react';

import Graphic from './Graphic';

class Circle extends Graphic {
  render () {
    return (
      <g>
        {
          this.props.isSelected && <rect
            x={this.props.x - this.props.r - 2}
            y={this.props.y - this.props.r - 2}
            width={this.props.r * 2 + 4}
            height={this.props.r * 2 + 4}
            fill='none'
            stroke='#111'
            strokeWidth={2}
          />
        }
        <circle 
          className='g'
          cx={this.props.x} 
          cy={this.props.y} 
          r={this.props.r} 
          fill={this.props.fill} 
          onClick={this.handleSelect}
          onMouseDown={this.handleDragStart}
          onTouchStart={this.handleDragStart}
        />
        {
          this.props.isSelected && <polygon 
            className='resize-handle'
            points={[
              [this.props.x + this.props.r + 2, this.props.y + this.props.r + 2],
              [this.props.x + this.props.r - 12, this.props.y + this.props.r + 2],
              [this.props.x + this.props.r + 2, this.props.y + this.props.r - 12]
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

export default Circle;