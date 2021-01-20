import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import { Col, Menu, Row } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import Logout from "./components/logout";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Divider } from "antd";
import MyTodoList from "./pages/MyList/myTodoList";
//import LoginFacebook from "./components/loginFacebook";

export class App extends Component {
  state = {
    user: {
      name: "",
      email: "",
      url: "",
    },
    isLoggedIn: false,
  };
  responseGoogle = (response) => {
    if (response.accessToken !== null) {
      this.setState({
        user: {
          name: response.profileObj.name,
          email: response.profileObj.email,
          url: response.profileObj.imageUrl,
        },
        isLoggedIn: true,
      });
    }
    //console.log(response);
  };
  logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <Header
              style={{
                position: "fixed",
                zIndex: 1,
                width: "100%",
                height: "13%",
              }}
            >
              <Row style={{ paddingTop: "1%", paddingBottom: "0.5%" }}>
                <Col span={5}>
                  <NavBar />
                </Col>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["1"]}
                >
                  <Menu.Item key="1">
                    <Col>
                      <Link
                        to={"/home"}
                        id="home"
                        className="nav-link"
                        style={{ color: "white" }}
                      >
                        Home
                      </Link>
                    </Col>
                  </Menu.Item>
                  {/* {this.state.isLoggedIn && ( */}
                  <Menu.Item key="2">
                    <Col>
                      <Link
                        to={"/myTodoList"}
                        id="myTodoList"
                        className="nav-link"
                        style={{ color: "white" }}
                      >
                        My Todo List
                      </Link>
                    </Col>
                  </Menu.Item>
                  {/* )} */}
                  <Divider type="vertical" />
                  <Menu.Item key="3">
                    <Col>
                      <Link
                        to={"/about"}
                        id="about"
                        className="nav-link"
                        style={{ color: "white" }}
                      >
                        About us
                      </Link>
                    </Col>
                  </Menu.Item>
                </Menu>
                <Col span={2}>
                  {this.state.isLoggedIn && <Logout logout={this.logout} />}
                </Col>
              </Row>
            </Header>
            <Content
              style={{
                padding: "0 50px",
                marginTop: 100,
                overflow: "auto",
                height: "calc(100vh - 55px)",
              }}
            >
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => (
                    <Home
                      responseGoogle={this.responseGoogle}
                      user={this.state.user}
                      isLoggedIn={this.state.isLoggedIn}
                    />
                  )}
                />
                <Route
                  path="/home"
                  component={() => (
                    <Home
                      responseGoogle={this.responseGoogle}
                      user={this.state.user}
                      isLoggedIn={this.state.isLoggedIn}
                    />
                  )}
                />
                <Route path="/about" component={About} />
                <Route path="/myTodoList" component={MyTodoList} />
              </Switch>
            </Content>
            <Footer
              style={{
                color: "#F0F8FF",
                backgroundColor: "#00008B",
                position: "sticky",
                bottom: "0",
                textAlign: "center",
              }}
            >
              {this.state.isLoggedIn ? "Logged in" : "Not logged in"}
            </Footer>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
