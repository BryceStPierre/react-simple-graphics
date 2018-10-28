import React from 'react';

import SimpleGraphicsApp from './components/SimpleGraphicsApp';
import SimpleGraphicsBase from './components/graphics/SimpleGraphicsBase';


class App extends SimpleGraphicsApp {

  constructor(props) {
    super(props);
  
    this.state = {
      shapes: []
    };
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
        <SimpleGraphicsBase 
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