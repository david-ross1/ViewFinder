import React from 'react';
import { withRouter } from 'react-router-dom';
import './session.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      password2: '',
      errors: {}
    };
    
    this.otherForm = this.otherForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  otherForm() {
    this.props.otherForm()
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user).then(this.props.closeModal); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      
      <div className="login-form-container">
        <div className='login-head'>
          <button className='sign-button' onClick={this.otherForm}><p className='button-text'>Sign Up</p></button>
          <button className='close-button' onClick={this.props.closeModal}>X</button>
        </div>
        <form className="session-form-sign" onSubmit={this.handleSubmit}>
          <div className="login-form">
            <div className="input">
              <label>Email:</label>
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
            </div>  
              <br />
            <div className="input">
            
              <label>Name:</label> 
              <br />  
              <input
                type="text"
                value={this.state.name}
                onChange={this.update("name")}
                placeholder="Name"
              />
            </div>
              <br />
            <div className="input">
            
              <label>Password:</label>
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
            </div>
            <br />
            <div className="input">
            
              <label>Re-enter password:</label>
              <br />  
              <input
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
            </div>
            <br />
            <input className="submit" type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
      
    );
  }
}

export default withRouter(SignupForm);