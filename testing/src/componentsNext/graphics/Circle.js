import React from 'react';

import Graphic from './Graphic';

class Circle extends Graphic {
  render () {
    return (
      <g>
        {
          this.props.isSelected && <circle
            x={this.props.x}
            y={this.props.y}
            // width={this.props.r * 2 + 4}
            // height={this.props.r * 2 + 4}
            r={this.props.r}
            fill='none'
            stroke='#111'
            strokeWidth={4}
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
              { x: this.props.x + this.props.r + 2, y: this.props.y + this.props.r + 2 },
              { x: this.props.x + this.props.r - 12, y: this.props.y + this.props.r + 2 },
              { x: this.props.x + this.props.r + 2, y: this.props.y + this.props.r - 12 }
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

export default Circle;