import React, { Component } from "react";
import LoginGoogle from "./components/loginGoogle";
import Intro from "./components/intro";
import { Col, Row } from "antd";
export class Home extends Component {
  render(props) {
    return (
      <div>
          <Row
            justify="space-around"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span="12">
              <Intro />
            </Col>
            <Col className="gutter-row" span="12">
              <LoginGoogle
                responseGoogle={this.props.responseGoogle}
                user={this.props.user}
                isLoggedIn={this.props.isLoggedIn}
              />
            </Col>
          </Row>
      </div>
    );
  }
}

export default Home;
