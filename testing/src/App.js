import React from 'react';

import GraphicsContainer from './components/GraphicsContainer';
import DataUtils from './utils/DataUtils';

class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      shapes: []
    };
  }
  
  handleUpdate = (shapes) => {
    this.setState({ shapes });
  } 

  addText = () => {
    this.setState({ shapes: this.state.shapes.concat(DataUtils.text()) });
  }

  addCircle = () => {
    this.setState({ shapes: this.state.shapes.concat(DataUtils.circle()) });
  }

  addPolygon = () => {
    this.setState({ shapes: this.state.shapes.concat(DataUtils.polygon()) });
  }

  addRectangle = () => {
    this.setState({ shapes: this.state.shapes.concat(DataUtils.rectangle()) });
  }

  render() {
    return (
      <div>
        <GraphicsContainer 
          width={500}
          height={400}
          fill='#EEE'
          responsive
          graphics={this.state.shapes}
          onUpdate={this.handleUpdate}
        />
        <button onClick={this.addCircle}>Add Circle</button>
        <br />
        <button onClick={this.addPolygon}>Add Polygon</button>
        <br />
        <button onClick={this.addRectangle}>Add Rectangle</button>
        <br />
        <button onClick={() => { console.log(this.state.shapes); }}>Log</button>
      </div>
    );
  }
}

export default App;