import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export class LoginFacebook extends Component {
    render(props) {
        return (
            <div>
                {!this.props.isLoggedIn ? (
          <div>
            <FacebookLogin
                appId="229817322108262"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.props.componentClicked}
                callback={this.props.responseFacebook}
                icon='fa-facebook'
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
        )
    }
}

export default LoginFacebook;
