import React, { Component } from 'react';
import ColorPicker from './ColorPicker/ColorPicker';

class Parent extends Component {
  constructor() {
    super();
    
    this.state = { 
      value: '#ffcc33',
      colors: [
        {name: 'red', value: '#ed1d24'},
        {name: 'yellow', value: '#ffce35'},
        {name: 'green', value: '#00a651'},
        {name: 'blue', value: '#00aeef'}
      ]
    }

    this.onChange = this.onChange.bind(this);
  }
  
  onChange(newColor) {
    this.setState({value: newColor});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 m-auto">
            <ColorPicker onChange={this.onChange} value={this.state.value} colors={this.state.colors} />
          </div>
        </div>
      </div>
    )
  }
}

export default Parent;
