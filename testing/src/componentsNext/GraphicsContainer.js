import React from 'react';

class GraphicsContainer extends React.Component {

  handleSelectNone = (e) => {
    
  }

  handleMouseMove = (e) => {

  }

  handleMouseUp = (e) => {

  }

  getEvent = (e) => {
    return e.touches && e.touches[0] ? e.touches[0] : e;
  }

  render() {
    return (
      <svg
        width={this.props.width}
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
        
      </svg>
    )
  }
}

export default GraphicsContainer;
