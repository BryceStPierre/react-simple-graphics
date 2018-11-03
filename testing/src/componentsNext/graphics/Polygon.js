import React from 'react';

import Graphic from './Graphic';

class Polygon extends Graphic {
  render() {
    return (
      <g>
        {
          this.props.isSelected && <rect
            x={50}            // TODO.
            y={50}            // TODO.
            width={50}        // TODO.
            height={50}       // TODO.
            fill='none'
            stroke='#111'
            strokeWidth={4}
          />
        }
        <polygon
          className='g'
          points={this.props.points.map(p => `${p.x},${p.y}`).join(" ")}
          fill={this.props.fill}
          onClick={this.handleSelect}
          onMouseDown={this.handleDragStart} 
          onTouchStart={this.handleDragStart}
        />
        {
          this.props.isSelected && <polygon 
            className='resize-handle'
            points={'50,50, 54,54 40,40'}
            // points={[
            //   [this.props.x + this.props.width, this.props.y + this.props.height],
            //   [this.props.x + this.props.width - 12, this.props.y + this.props.height],
            //   [this.props.x + this.props.width, this.props.y + this.props.height - 12]
            // ].map(v => `${v[0]},${v[1]}`).join(" ")}
            fill='#111'
            onMouseDown={this.handleScaleStart}
            onTouchStart={this.handleScaleStart}
          />
        }
      </g>
    )
  }
}

export default Polygon;