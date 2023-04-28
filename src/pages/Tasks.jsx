import { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CreateTaskForm from '../components/CreateTaskForm'
import ToDoList from '../components/ToDoList'
import { logout } from '../redux/actions/user.action';
import { fetchTasks } from '../redux/actions/to-do.action';

class Tasks extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTasks())
  }
  render() {
    const { name, dispatch, history } = this.props
    return (
      <div>
        <h4>Olá <strong style={{textTransform: 'capitalize'}}>{name}</strong>, boas vindas</h4>
        <CreateTaskForm />
        <ToDoList />
        <button onClick={() => {
          dispatch(logout());
          history.push('/')
        }}
        >
          Sair
        </button>
      </div>
    )
  }
}

// CRUD
// Create
// Read
// Update
// Delete
const mapStateToProps = ({ user }) => ({
  name: user.name,
});

Tasks.propTypes = {
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Tasks);

