import React from "react";
import { withRouter } from "react-router-dom";
import "./session.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.demoUser = this.demoUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.otherForm = this.otherForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/comments");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  otherForm() {
    this.props.otherForm();
  }

  demoUser(e) {
    e.preventDefault();
    const user = { email: "demo@demo.com", password: "123456" };
    this.props.login(user).then(this.props.closeModal);
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-head">
          <button className="sign-button" onClick={this.otherForm}>
            <p className="button-text">Sign Up</p>
          </button>
          <button className="close-button" onClick={this.props.closeModal}>
            X
          </button>
        </div>
        <form className="session-form-sign" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <div className="login-form">
            <div className="input">
              <label></label>
              <br />
              <input
                className="login-text"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
                required
              />
            </div>
            <br />
            <br />
            <div className="input">
              <label></label>
              <br />
              <input
                className="login-text"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                required
              />
            </div>
            <br />
            <br />
            <input className="submit button" type="submit" value="Submit" />
            {this.renderErrors()}
            <br />{" "}
            <div className="demo-button">
              {" "}
              <button onClick={this.demoUser} className="demo-submit">
                Demo Login{" "}
              </button>{" "}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
