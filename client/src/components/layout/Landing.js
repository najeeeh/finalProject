import React, { Component } from "react";
import { Link } from "react-router-dom";


class Landing extends Component {
  render() {
    return (
      <div style={{ height: "100vh" , backgroundImage: "url(/image1.jpg)" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              
              <h2 style={{ fontFamily: "monospace " ,backgroundColor:'yellow' }}>Coccinella Digi-Mark</h2>
              <span style={{ fontFamily: "monospace " ,backgroundColor:'yellow' }}>YOUR IMAGE, OUR PASSION</span> 
            </h4>
            <p className="flow-text white-text text-darken-1 black ">
            STRATEGY,CREATIVITY,MATKETING,ADS
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
