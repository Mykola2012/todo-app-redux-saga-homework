import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

const taskReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { newTask } = action;
      const { tasks } = state;
      const newTasks = [...tasks, { ...newTask }];
      return { ...state, tasks: newTasks, isFetching: false };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const { err } = action;
      return { ...state, error: err, isFetching: false };
    }

    case ACTION_TYPES.GET_TASKS_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const { newTasks: receivedTasks } = action;

      const newTasks = [...receivedTasks];
      return { ...state, tasks: newTasks, isFetching: false };
    }
    case ACTION_TYPES.GET_TASKS_ERROR: {
      const { err } = action;
      return { ...state, error: err, isFetching: false };
    }

    case ACTION_TYPES.UPDATE_TASK_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }
    case ACTION_TYPES.UPDATE_TASK_SUCCESS: {
      const { updatedTask } = action;
      const { tasks } = state;

      const newTasks = [...tasks];
      const updatedTaskIndex = newTasks.findIndex(t => t.id === updatedTask.id);
      newTasks[updatedTaskIndex] = { ...updatedTask };
      return { ...state, tasks: newTasks, isFetching: false };
    }
    case ACTION_TYPES.UPDATE_TASK_ERROR: {
      const { err } = action;
      return { ...state, error: err, isFetching: false };
    }
    case ACTION_TYPES.REMOVE_TASK: {
      const { taskId } = action;
      const { tasks } = state;

      const newTasks = [...tasks];
      const taskIndex = newTasks.findIndex(c => c.id === taskId);
      newTasks.splice(taskIndex, 1);

      return { ...state, tasks: newTasks };
    }
    default:
      return state;
  }
};

export default taskReducer;
