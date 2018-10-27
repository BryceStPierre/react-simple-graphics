import React, { Component } from 'react';

import Base from './components/Base';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      shapes: []
    }
  }

  handleUpdate = (i, data) => {
    const shapes = this.state.shapes;

    if (i === -2) {
      shapes.forEach((s, i) => {
        if (s.data.isDragging) {
          shapes[i].data.x = data.x;
          shapes[i].data.y = data.y;
        }
      });
    } else if (i === -1) {
      shapes.forEach((s, i) => {
        shapes[i].data.isDragging = false;
      });
    } else {
      shapes[i].data = data;
    }

    this.setState({ shapes });
  }
  
  addCircle = () => {
    this.setState({
      shapes: this.state.shapes.concat({ 
        type: 'Circle',
        data: { x: 50, y: 50, r: 30, fill: 'red', isDragging: false }
      })
    });
  }

  addRectangle = () => {
    this.setState({
      shapes: this.state.shapes.concat({ 
        type: 'Rectangle', 
        data: { x: 50, y: 50, width: 75, height: 75, fill: 'green', isDragging: false }
      })
    });
  }

  log = () => {
    console.log(this.state.shapes);
  }

  render() {
    return (
      <div>
        <Base 
          width={500} 
          height={400} 
          backgroundColor='#EEE' 
          graphics={this.state.shapes} 
          onUpdate={this.handleUpdate} 
        />
        <button onClick={this.addCircle}>Add Circle</button>
        <button onClick={this.addRectangle}>Add Rectangle</button>
        <button onClick={this.log}>Log</button>
      </div>
    );
  }
}

export default App;