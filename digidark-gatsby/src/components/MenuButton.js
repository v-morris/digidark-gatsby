import React, { Component } from "react";
 
class MenuButton extends Component {
    
  render() {
    const style = {
        padding: `0`,
        margin: `0`,
        color:`white`,
        cursor:`pointer`
    }
    return (
      <h6 style = {style} onClick={this.props.handleMouseDown}>menu</h6>
    );
  }
}
 
export default MenuButton;