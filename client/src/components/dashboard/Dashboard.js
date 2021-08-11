import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "85vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into our plateform, thanks for submetting your order{" "}
                <span style={{ fontFamily: "monospace" }}></span> 👏
              </p>
              
              </h4>

              <div class="row">
    <form class="col s12 center">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
          <label for="icon_prefix2">Compaign informations</label>
        </div>
      </div>
    </form>
  </div>
            
            

            <form action="#" style={{ fontFamily: "monospace" }}>
    <p>
      <label>
        <input type="checkbox" />
        <span>Media (Planning, Buying, Analytics)</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" />
        <span>Creative (Strategy, Content Development, Production)</span>
      </label>
    </p><p>
      <label>
        <input type="checkbox" />
        <span>Commerce (Amazon, Walmart, Marketplace Strategy)</span>
      </label>
    </p><p>
      <label>
        <input type="checkbox" />
        <span>PRESS & MEDIA RELATIONS</span>
      </label>
    </p>
  </form>
        














            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
