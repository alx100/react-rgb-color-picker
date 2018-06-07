import React, { Component } from 'react';
import PropTypes from 'prop-types';
import convert from 'color-convert';
import OutsideClickDetector from './helpers/OutsideClickDetector';

class DropdownSlider extends Component {
  constructor(props){
    super(props);

    this.state = {
      show: false,
      red: 0,
      green: 0,
      blue: 0
    }

    this.setCurrentColor = this.setCurrentColor.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  setCurrentColor() {
    const red = this.state.red,
          green = this.state.green,
          blue = this.state.blue,
          currentColorHex = `#${convert.rgb.hex(red, green, blue)}`;

    this.props.updateCurrentColor(currentColorHex);
  }

  clearState() {
    this.setState({
      show: false,
      red: 0,
      green: 0,
      blue: 0
    });
  }

  updateColor(e) {
    this.setState({[e.target.name]: e.target.value});
    this.setCurrentColor();
  }

  onConfirm() {
    this.props.setSliderColor();
    this.clearState();
  }
  
  showMenu() {
    this.props.resetCurrentColor();
    this.setState({show: true});
  }
  
  hideMenu() {
    this.props.resetCurrentColor();
    this.clearState();
  }

  render() {
    const colorBadgeStyles = {background: this.props.currentValue};

    return (
      <div className="dropdown-slider">
        <button 
          className="btn btn-badge btn-lg btn-outline-secondary"
          type="button"
          onClick={this.showMenu}
        > 
          <div className="current-color__badge" style={colorBadgeStyles}></div>
        </button>
        { this.state.show && (
          <OutsideClickDetector hideMenu={this.hideMenu}>
              <ul className="dropdown-menu slider-list">
                <li className="dropdown-item slider-list__item">
                    <span className="slider-list__title">R</span>
                    <input className="slider-red" 
                      type="range" 
                      min="0" 
                      max="255" 
                      steps="1" 
                      name="red"
                      value={this.state.red} 
                      onChange={this.updateColor} 
                    />
                </li>
                <li className="dropdown-item slider-list__item">
                    <span className="slider-list__title">G</span>
                    <input className="slider-green" 
                      type="range" 
                      min="0" 
                      max="255" 
                      steps="1" 
                      name="green"
                      value={this.state.green} 
                      onChange={this.updateColor} 
                    />
                </li>
                <li className="dropdown-item slider-list__item">
                    <span className="slider-list__title">B</span>
                    <input className="slider-blue" 
                      type="range"  
                      min="0" 
                      max="255" 
                      steps="1"
                      name="blue" 
                      value={this.state.blue} 
                      onChange={this.updateColor} 
                    />
                </li>
                <li className="button-item">
                  <button className="btn btn-outline-secondary" onClick={this.hideMenu}>CANCEL</button>
                  <button className="btn btn-outline-success" onClick={this.onConfirm}>OK</button>
                </li>
              </ul>
            </OutsideClickDetector>
          )
        }
      </div>
    );
  }
}

DropdownSlider.propTypes = {
  currentValue: PropTypes.string.isRequired, 
  setSliderColor: PropTypes.func.isRequired, 
  updateCurrentColor: PropTypes.func.isRequired, 
  resetCurrentColor: PropTypes.func.isRequired
}

export default DropdownSlider;

