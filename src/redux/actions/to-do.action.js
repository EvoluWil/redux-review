export const CREATE_TASK = 'CREATE_TASK';
export const FINISH_TASK = 'FINISH_TASK';
export const taskLists = 'taskLists';

export const createTask = (payload) => ({
  type: CREATE_TASK,
  payload,
});

export const finishTask = (payload) => ({
  type: FINISH_TASK,
  payload,
});
// {title: '', finished: true}

export const success = (payload) => ({
  type: taskLists,
  payload,
});

export const error = (payload) => ({
  type: taskLists,
  payload,
});

export const fetchTasks = () => async (dispatch) => { 
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    dispatch(success(data));
  } catch (error) { 
    dispatch(error([]));
  }
}