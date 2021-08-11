import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BiBug } from "react-icons/bi";


class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper yellow ">
          
    
          <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo left black-text"
            >
                C<BiBug/>ccinella
            </Link>
            <ul id="nav-mobile" className="col s5 right hide-on-med-and-down">
        <li><Link
              to="/"
              style={{
                fontFamily: "monospace"
              }} className="col s5 nav-mobile left black-text">HOME</Link></li>
        <li><Link
              to="/Footer"
              style={{
                fontFamily: "monospace"
              }} className="col s5 nav-mobile left black-text">SERVICES</Link></li>
        <li><Link
              to="/Footer"
              style={{
                fontFamily: "monospace"
              }} className="col s5 nav-mobile left black-text">ABOUT US</Link></li>
        
      </ul>
            
          </div>
          </nav>
      </div>
    );
  }
}

export default Navbar;
