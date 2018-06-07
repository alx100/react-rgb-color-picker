import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }

    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu() {
    this.setState({show: true});
  }

  hideMenu(e) {
    if(e && e.relatedTarget) {
      e.relatedTarget.click();
    }
    this.setState({show: false});
  }

  render() {
    const {colors} = this.props;

    return (
      <div className="dropdown">
        <button 
          className="btn btn-caret btn-outline-secondary"
          type="button"
          onClick={this.showMenu}
          onBlur={this.hideMenu}
        > 
        <i className="fas fa-caret-down"></i>
        </button>
        { this.state.show && (
            <ul className="dropdown-menu color-list">
              {colors.map((color, index) => (
                <li key={index}>
                  <a className="dropdown-item color-list__item" onClick={this.props.setListColor} name={color.value} href="">
                    <span className="color-list__title">{color.name.toUpperCase()}</span>
                    <span className="color-list__badge" style={{backgroundColor: color.value}}></span>
                  </a>
                </li>
              ))}
            </ul>
          )
        }
      </div>
    );
  }
}

Dropdown.propTypes = {
  colors: PropTypes.array.isRequired,
  setListColor: PropTypes.func.isRequired
}

export default Dropdown;
