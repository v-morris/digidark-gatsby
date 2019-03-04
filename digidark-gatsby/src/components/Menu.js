import React, { Component } from "react";
import "./Menu.css";
import { Link } from "gatsby";

class Menu extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                className={visibility}>
                <h6 onClick={this.props.handleMouseDown}>close</h6>
                <h2><Link to="/">Home</Link></h2>
                <h2><Link to="/development">Development</Link></h2>
                <h2><Link to="/photography">Photography</Link></h2>
                <h2><a href="#">Contact</a></h2>
            </div>
        );
    }
}

export default Menu;
