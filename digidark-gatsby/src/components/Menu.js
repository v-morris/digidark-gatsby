import React, { Component } from "react";
import "./Menu.css";
import "./layout.css"
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
                <h4 onClick={this.props.handleMouseDown}>close</h4>
                <h2><Link to="/">Home</Link></h2>
                <h2><Link to="/development">Development</Link></h2>
                <h2><Link to="/photography">Photography</Link></h2>
            </div>
        );
    }
}

export default Menu;
