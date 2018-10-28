import React from 'react';

import Graphic from './Graphic';

class Circle extends Graphic {
  render () {
    return (
      <g>
        {
          this.props.isSelected && <rect 
            className=''
            x={this.props.x - this.props.r - 5}
            y={this.props.y - this.props.r - 5}
            width={this.props.r * 2 + 10}
            height={this.props.r * 2 + 10}
            fill='none'
            stroke='#111'
            strokeWidth={1}
          />
        }
        {
          this.props.isSelected && <circle 
            className='resize-handle'
            cx={this.props.x + this.props.r + 5}
            cy={this.props.y + this.props.r + 5}
            r={6}
            fill='#111'

            onMouseDown={this.handleScaleStart}
            onTouchStart={this.handleScaleStart}
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
          // stroke='#111'
          // strokeWidth={this.props.isSelected ? 3 : 0}
        />
      </g>
    );
  }
}

export default Circle;