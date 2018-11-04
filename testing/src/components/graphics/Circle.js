import React from 'react';

import Graphic from './Graphic';

class Circle extends Graphic {

  static handleDragging = (data, inputs) => {
    data.x = inputs.x;
    data.y = inputs.y;
    return data;
  }

  static handleScaling = (data, inputs) => {
    let r = Math.sqrt(Math.pow(data.x - inputs.x, 2) + Math.pow(data.y - inputs.y, 2));
    data.r = Math.sqrt(Math.pow(r, 2) / 2);
    return data;
  }

  render () {
    return (
      <g>
        {
          this.props.isSelected && <circle
            cx={this.props.x}
            cy={this.props.y}
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