import React from 'react';

import SimpleGraphicsApp from './components/SimpleGraphicsApp';
import Base from './components/Base';

import DataUtils from './utils/DataUtils';

class App extends SimpleGraphicsApp {

  constructor(props) {
    super(props);
  
    this.state = {
      shapes: []
    };
  }
  
  addCircle = () => {
    this.setState({ shapes: this.state.shapes.concat(DataUtils.circle()) });
  }

  addRectangle = () => {
    this.setState({ shapes: this.state.shapes.concat(DataUtils.rectangle()) });
  }

  addPolygon = () => {
    this.setState({ shapes: this.state.shapes.concat(DataUtils.polygon()) });
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
        <button onClick={this.addPolygon}>Add Polygon</button>
        <button onClick={() => { console.log(this.state.shapes); }}>Log</button>
      </div>
    );
  }
}

export default App;