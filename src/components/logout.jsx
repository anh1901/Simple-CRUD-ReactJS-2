import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";

export class Logout extends Component {
  render() {
    return (
      <>
        <GoogleLogout
          clientId="13945479573-7ulpa9hb7ng7u835vrko2j48ncongbsg.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={this.props.logout}
        ></GoogleLogout>
      </>
    );
  }
}

export default Logout;
