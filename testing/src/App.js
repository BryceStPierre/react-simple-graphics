import React from 'react';

import SimpleGraphicsApp from './components/SimpleGraphicsApp';
import Base from './components/Base';

import Factory from './utils/Factory';

class App extends SimpleGraphicsApp {

  constructor(props) {
    super(props);
  
    this.state = {
      shapes: []
    };
  }
  
  addCircle = () => {
    this.setState({ shapes: this.state.shapes.concat(Factory.createCircle()) });
  }

  addRectangle = () => {
    this.setState({ shapes: this.state.shapes.concat(Factory.createRectangle()) });
  }

  render() {
    return (
      <div>
        <Base 
          width={500} 
          height={400} 
          backgroundColor='#EEE' 
          graphics={this.state.shapes} 
          onBaseUpdate={this.handleBaseUpdate}
          onGraphicUpdate={this.handleGraphicUpdate} 
        />
        <button onClick={this.addCircle}>Add Circle</button>
        <button onClick={this.addRectangle}>Add Rectangle</button>
        <button onClick={() => { console.log(this.state.shapes); }}>Log</button>
      </div>
    );
  }
}

export default App;