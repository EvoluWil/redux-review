import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../redux/actions/user.action';

class Login extends React.Component {
  state = {
    email: '',
    name: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleLogin = (event) => {
    event.preventDefault();

    const { dispatch, history } = this.props;
    const { email, name } = this.state;
    if (email, name) { 
      dispatch(login({
        email, name
      }));
      history.push('/tasks');
    }
  };

  render() {
    const { email, name } = this.state;
    return (
      <form onSubmit={this.handleLogin}>
        <label htmlFor="email-input">
          Email:
          <input
            type="text"
            id="email-input"
            name="email"
            value={ email }
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="name-input">
          Nome:
          <input
            type="text"
            id="name-input"
            name="name"
            value={ name }
            onChange={ this.handleInputChange }
          />
        </label>
        <button
          type="submit"
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);