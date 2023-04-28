import { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTask } from '../redux/actions/to-do.action';


class CreateTaskForm extends Component {
  state = {
    title: ''
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleCreateTask = (event) => {
    event.preventDefault();

    const { dispatch } = this.props;
    const { title } = this.state;
    
    dispatch(createTask({
      title,
      finished: false,
    }));
    
    this.setState({
      title: ''
    })
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <p>Criar nova tarefa?</p>
        <form onSubmit={ this.handleCreateTask }>
          <label htmlFor="title-input">
            Titulo:
            <input
              type="text"
              id="title-input"
              name="title"
              value={ title }
              onChange={ this.handleInputChange }
            />
          </label>
          <button type='submit'>Criar</button>
        </form>
      </div>
    )
  }
}

CreateTaskForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(CreateTaskForm)
