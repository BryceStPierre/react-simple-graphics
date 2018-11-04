import React from 'react';

import Rectangle from './graphics/Rectangle';
import Circle from './graphics/Circle';
import Polygon from './graphics/Polygon';

import { events } from '../utils/events';
import GraphicUtils from '../utils/GraphicUtils';

class GraphicsContainer extends React.Component {

  handleDragStart = (d) => {
    let graphics = this.props.graphics.map(g => { 
      g.data.isSelected = false; 
      g.data.isDragging = false; 
      return g; 
    });
    graphics[d.index].data.isSelected = d.isSelected;
    graphics[d.index].data.isDragging = d.isDragging;
    return graphics;
  }

  handleDragging = (d) => {
    let graphics = this.props.graphics.slice();
    let index = this.props.graphics.findIndex(g => g.data.isDragging);
      
    if (index === -1) 
      return graphics;

    graphics[index].data = GraphicUtils.drag(graphics[index].type, graphics[index].data, d);
    return graphics;
  }

  handleDragEnd = (d) => {
    return this.props.graphics.map(g => { g.data.isDragging = false; return g; });
  }

  handleScaleStart = (d) => {
    let graphics = this.props.graphics.slice();
    graphics[d.index].data.isScaling = d.isScaling;
    return graphics;
  }

  handleScaling = (d) => {
    let graphics = this.props.graphics.slice();
    let index = this.props.graphics.findIndex(g => g.data.isScaling);
  
    if (index === -1) 
      return graphics;

    graphics[index].data = GraphicUtils.scale(graphics[index].type, graphics[index].data, d);
    return graphics;
  }

  handleScaleEnd = (d) => {
    return this.props.graphics.map(g => { g.data.isScaling = false; return g; });
  }

  handleSelect = (d) => {
    let graphics = this.props.graphics.map(g => { g.data.isSelected = false; return g; });
    graphics[d.index].data.isSelected = d.isSelected;
    return graphics;
  }

  handleEvent = (e, data) => {
    let graphics;
    switch (e) {
      case events.DRAG_START: graphics = this.handleDragStart(data); break;
      case events.DRAGGING: graphics = this.handleDragging(data); break;
      case events.DRAG_END: graphics = this.handleDragEnd(data); break;
      case events.SCALE_START: graphics = this.handleScaleStart(data); break;
      case events.SCALING: graphics = this.handleScaling(data); break;
      case events.SCALE_END: graphics = this.handleScaleEnd(data); break;
      case events.SELECT: graphics = this.handleSelect(data); break;
      default:
    }
    this.props.onUpdate(graphics);
  }

  handleSelectNone = (e) => {
    let graphics = this.props.graphics.map(g => { g.data.isSelected = false; return g; });
    this.props.onUpdate(graphics);
  }
  
  handleMouseMove = (e) => {
    if (this.props.graphics.length === 0)
      return;
    this.handleEvent(events.DRAGGING, {
      x: this.getEvent(e).clientX,
      y: this.getEvent(e).clientY
    });
    this.handleEvent(events.SCALING, {
      x: this.getEvent(e).clientX,
      y: this.getEvent(e).clientY
    });
  }

  handleMouseUp = (e) => {
    if (this.props.graphics.length === 0)
      return;
    this.handleEvent(events.DRAG_END, {
      isDragging: false
    });
    this.handleEvent(events.SCALE_END, {
      isDragging: false
    });
  }

  getEvent = (e) => {
    return e.touches && e.touches[0] ? e.touches[0] : e;
  }

  render() {
    return (
      <svg
        width={this.props.responsive ? '100%' : this.props.width}
        height={this.props.height}
        onMouseMove={this.handleMouseMove}
        onTouchMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        onTouchEnd={this.handleMouseUp}
      >
        <rect
          width='100%'
          height='100%'
          fill={this.props.fill}
          onClick={this.handleSelectNone}
        />
        {
          this.props.graphics.map((g, i) => {
            switch (g.type) {
              case 'Circle': return <Circle key={i} index={i} onEvent={this.handleEvent} {...g.data} />;
              case 'Polygon': return <Polygon key={i} index={i} onEvent={this.handleEvent} {...g.data} />;
              case 'Rectangle': return <Rectangle key={i} index={i} onEvent={this.handleEvent} {...g.data} />;
              default: return null;
            }
          })
        }
      </svg>
    )
  }
}

export default GraphicsContainer;
