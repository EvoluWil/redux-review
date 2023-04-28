import { Component } from "react"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { finishTask } from "../redux/actions/to-do.action";

class ToDoList extends Component {

  handleInputChange = ({ target }, task) => {
    const { dispatch } = this.props;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    dispatch(finishTask({
      ...task, 
      finished: value
    }))
  };


  render() {
    const {tasks} = this.props
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.title}>
            <span>{task.title}</span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(event) => this.handleInputChange(event, task)}
            />
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = ({ toDo }) => ({
  tasks: toDo.tasks,
});

ToDoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps)(ToDoList);