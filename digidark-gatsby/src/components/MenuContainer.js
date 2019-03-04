import React, { Component } from "react";
import MenuButton from "./MenuButton"
import Menu from "./Menu"
 
class MenuContainer extends Component {
  constructor(props, context) {
    super(props, context);
 
    this.state = {
      showMenu: false
    };
 
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
 
  handleMouseDown(e) {
    this.toggleMenu();

  }
 
  toggleMenu() {
    this.setState(
      {
        showMenu: !this.state.showMenu
      }
    );
  }

  render() {
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.showMenu}/>
      </div>
    );
  }
}
 
export default MenuContainer;