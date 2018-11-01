import React from 'react';

import Graphic from './Graphic';

class Polygon extends Graphic {
  render() {
    return (
      <g>
        <polygon
          className='g'
          points={this.props.points.map(p => `${p.x},${p.y}`).join(" ")}
          fill={this.props.fill}
          onClick={this.handleSelect}
          onMouseDown={this.handleDragStart} 
          onTouchStart={this.handleDragStart}
        />
      </g>
    )
  }
}

export default Polygon;