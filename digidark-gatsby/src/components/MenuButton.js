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
      <h4 style = {style} onClick={this.props.handleMouseDown}>menu</h4>
    );
  }
}
 
export default MenuButton;