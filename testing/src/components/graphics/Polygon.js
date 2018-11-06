import React from 'react';

import Graphic from './Graphic';

class Polygon extends Graphic {

  static handleDragging = (data, inputs) => {
    let x = Math.min(...data.points.map(p => p.x)) - 2;
    let y = Math.min(...data.points.map(p => p.y)) - 2;

    data.points = data.points.map(p => ({ x: inputs.x + p.x - x + 2, y: inputs.y + p.y - y + 2 }));
    return data;
  }

  static handleScaling = (data, inputs) => {
    let minX = Math.min(...data.points.map(p => p.x));
    let minY = Math.min(...data.points.map(p => p.y));
    let width = Math.max(...data.points.map(p => p.x)) - minX;
    let height = Math.max(...data.points.map(p => p.y)) - minY;
    let translatedPoints = data.points.map(p => ({ x: p.x - minX, y: p.y - minY }));

    let scaleX = (inputs.x - minX) / width;
    let scaleY = (inputs.y - minY) / height;
    let scaledPoints = translatedPoints.map(p => ({ x: scaleX * p.x, y: scaleY * p.y }));

    data.points = scaledPoints.map(p => ({ x: minX + p.x, y: minY + p.y }));
    return data;
  }

  render() {
    let x = Math.min(...this.props.points.map(p => p.x)) - 2;
    let y = Math.min(...this.props.points.map(p => p.y)) - 2;
    let width = Math.max(...this.props.points.map(p => p.x)) - x + 2;
    let height = Math.max(...this.props.points.map(p => p.y)) - y + 2;

    return (
      <g>
        {
          this.props.isSelected && <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill='none'
            stroke='#111'
            strokeWidth={2}
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
            points={[
              { x: x + width, y: y + height },
              { x: x + width - 12, y: y + height },
              { x: x + width, y: y + height - 12 }
            ].map(p => `${p.x},${p.y}`).join(" ")}
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