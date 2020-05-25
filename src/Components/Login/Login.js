import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import loginUser from "../../actions/loginAction";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleOnClickSubmit = () => {
    this.props.loginUser(this.state.email, this.state.password);
    this.forceUpdate();
  };

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push("/");
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      this.props.history.push("/");
    }
    return (
      <div className="login-conatiner">
        <span>{this.props.loginErrMsg}</span>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => this.setState({ email: event.target.value })}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            />
          </Form.Group>
          <Button variant="primary" onClick={() => this.handleOnClickSubmit()}>
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    user: state.loginReducer.user,
    loginErrMsg: state.loginReducer.loginErrMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) => {
      dispatch(loginUser(email, password));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
