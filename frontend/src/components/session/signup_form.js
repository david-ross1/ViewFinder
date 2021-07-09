import React from "react";
import { withRouter } from "react-router-dom";
import "./session.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.otherForm = this.otherForm.bind(this);
    this.alert = this.alert.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.otherForm();
      this.alert();
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
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

  otherForm() {
    this.props.otherForm();
  }

  alert() {
    return alert("User Created");
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-head">
          <button className="sign-button" onClick={this.otherForm}>
            <p className="button-text">Go to login</p>
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
            <div className="input">
              <label></label>
              <br />
              <input
                className="login-text"
                type="text"
                value={this.state.name}
                onChange={this.update("name")}
                placeholder="Name"
                required
              />
            </div>
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
            <div className="input">
              <label></label>
              <br />
              <input
                className="login-text"
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
                required
              />
            </div>
            <br />
            <input className="submit button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
