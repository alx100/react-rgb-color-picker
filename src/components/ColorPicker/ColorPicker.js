import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ColorPicker.css';
import Dropdown from './Dropdown';
import DropdownSlider from './DropdownSlider';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: ''
    }

    this.setListColor = this.setListColor.bind(this);
    this.setSliderColor = this.setSliderColor.bind(this);
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.resetCurrentColor = this.resetCurrentColor.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currentValue: nextProps.value})
  }

  updateCurrentColor(newColor) {
    this.setState({currentValue: newColor});
  }

  resetCurrentColor() {
    this.setState({currentValue: this.props.value});
  }

  setSliderColor() {
    const sliderColor = this.state.currentValue;
    this.props.onChange(sliderColor);
  }

  setListColor(e) {
    e.preventDefault();
    const listColor = e.target.name;
    this.props.onChange(listColor);
    this.resetCurrentColor();
  }
  
  render() {
    const {value} = this.props;

    return (
      <div className="wrapper">
        <h1 className="current-color__title">{value}</h1>
        <div className="btn-group">
          <DropdownSlider 
            currentValue={this.state.currentValue} 
            updateCurrentColor={this.updateCurrentColor}
            resetCurrentColor={this.resetCurrentColor}
            setSliderColor={this.setSliderColor}  
          />
          <Dropdown 
            colors={this.props.colors} 
            setListColor={this.setListColor} 
          />
        </div>
      </div>
    )
  }
}

ColorPicker.propTypes = {
  value: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ColorPicker;
