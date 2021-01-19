import React, { Component } from "react";
import GoogleLogin from "react-google-login";
export class LoginGoogle extends Component {
  render(props) {
    return (
      <div>
        {!this.props.isLoggedIn ? (
          <div>
            <h3>Join us now</h3>
            <GoogleLogin
              clientId="13945479573-7ulpa9hb7ng7u835vrko2j48ncongbsg.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={this.props.responseGoogle}
              onFailure={this.props.responseGoogle}
              cookiePolicy={"single_host_origin"}
              style={{ marginLeft:'5px' }}
            />
          </div>
        ) : (
          <div>
            <p>Name: {this.props.user.name}</p>
            <p>Email: {this.props.user.email}</p>
            <img src={this.props.user.url} alt={this.props.user.name} />
          </div>
        )}
      </div>
    );
  }
}

export default LoginGoogle;
