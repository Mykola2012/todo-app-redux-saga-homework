import ACTION_TYPES from './actionTypes';

export const createTaskAction = values => ({
  type: ACTION_TYPES.CREATE_TASK_ACTION,
  values,
});
export const createTaskRequest = () => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
});
export const createTaskSuccess = newTask => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  newTask,
});
export const createTaskError = err => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  err,
});

export const getTasksAction = () => ({
  type: ACTION_TYPES.GET_TASKS_ACTION,
});
export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
});
export const getTasksSuccess = newTasks => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  newTasks,
});
export const getTasksError = err => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  err,
});

export const updateTaskAction = (values, id) => ({
  type: ACTION_TYPES.UPDATE_TASK_ACTION,
  id,
  values,
});
export const updateTaskRequest = () => ({
  type: ACTION_TYPES.UPDATE_TASK_REQUEST,
});
export const updateTaskSuccess = updatedContact => ({
  type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
  updatedContact,
});
export const updateTaskError = err => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  err,
});

export const removeTask = tasktId => ({
  type: ACTION_TYPES.REMOVE_TASK,
  tasktId,
});
