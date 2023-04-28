import {
  CREATE_TASK,
  FINISH_TASK,
  taskLists
} from '../actions/to-do.action';

const INITIAL_STATE = {
  tasks: [],
  list: []
};

const toDoReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case CREATE_TASK:
      return {
      ...state,
      tasks: [...state.tasks, payload],
    };
    case FINISH_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.title === payload.title ? payload : task),
    };
    case taskLists:
      return {
        ...state,
        list: payload,
    };
  default:
    return state;
  }
};

export default toDoReducer;